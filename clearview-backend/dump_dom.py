import asyncio
import os
import sqlite3
import json
from playwright.async_api import async_playwright
from db.database import get_db
from db.models import SchoologyConnection
from auth.encryption import decrypt_cookies

# Temporarily hardcode user_id 1
USER_ID = 1

async def dump_schoology_dom():
    print("Loading active connection from database...")
    db_gen = get_db()
    db = next(db_gen)
    
    connection = db.query(SchoologyConnection).filter(SchoologyConnection.user_id == USER_ID).first()
    if not connection:
        print("No active connection found!")
        return
        
    print("Decrypting cookies...")
    cookies = decrypt_cookies(connection.encrypted_cookies)
    
    target_domain = "app.schoology.com"
    for c in cookies:
        domain = c.get("domain", "").lstrip('.')
        if "schoology.com" in domain and domain not in ["schoology.com", "app.schoology.com"]:
            target_domain = domain
            break
            
    target_url = f"https://{target_domain}/grades/grades"
    
    print(f"Launching Playwright and navigating to {target_url}...")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        
        await context.add_cookies(cookies)
        page = await context.new_page()
        
        await page.goto(target_url, wait_until="networkidle")
        
        actual_url = page.url
        print(f"Landed on {actual_url}")
        
        if "login" in actual_url or "authorize" in actual_url:
            print("Session failed, redirected to login.")
            await browser.close()
            return

        print("Scraping full HTML...")
        html = await page.content()
        
        out_path = "/tmp/schoology_grades_dump.html"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html)
            
        print(f"HTML dumped to {out_path}!")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(dump_schoology_dom())
