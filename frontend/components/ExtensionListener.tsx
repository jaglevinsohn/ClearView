"use client";

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function ExtensionListener() {
    const [userId, setUserId] = useState<string | null>(null);

    // Keep track of the current user globally for the extension
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId(null); 
            }
        });
        return () => unsubscribe();
    }, []);

    // Listen for extension requests across ANY open Gravio tab
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.source !== window || !event.data || event.data.type !== 'REQUEST_USER_ID') return;
            window.postMessage({ type: 'PROVIDE_USER_ID', userId: userId || null }, '*');
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [userId]);

    return null; // This component does not render anything visually
}
