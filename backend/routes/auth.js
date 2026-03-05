const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/db');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-123';

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Server error' });

        db.run(`INSERT INTO users (email, password_hash) VALUES (?, ?)`, [email, hash], function (err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Email already exists' });
                }
                return res.status(500).json({ error: 'Database error' });
            }

            const userId = this.lastID;
            const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' });
            res.status(201).json({ token, user: { id: userId, email } });
        });
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        bcrypt.compare(password, user.password_hash, (err, match) => {
            if (err || !match) return res.status(401).json({ error: 'Invalid credentials' });

            const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
            res.json({ token, user: { id: user.id, email: user.email } });
        });
    });
});

module.exports = router;
