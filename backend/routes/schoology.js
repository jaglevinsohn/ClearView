const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { runSyncForUser } = require('../services/syncJob');

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-123';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Unauthorized' });
        req.userId = decoded.userId;
        next();
    });
};

router.post('/connect', authMiddleware, async (req, res) => {
    const { apiKey, apiSecret } = req.body;
    // In a real app, store these securely and validate them via Schoology OAuth API
    // For MVP, trigger mock data sync

    try {
        await runSyncForUser(req.userId);
        res.json({ success: true, message: 'Schoology account connected successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to sync with Schoology' });
    }
});

router.post('/sync', authMiddleware, async (req, res) => {
    try {
        await runSyncForUser(req.userId);
        res.json({ success: true, message: 'Sync complete' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to sync with Schoology' });
    }
});

module.exports = router;
