const express = require('express');
const db = require('../db/db');
const router = express.Router();
const jwt = require('jsonwebtoken');

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

router.get('/students', authMiddleware, (req, res) => {
    db.all('SELECT * FROM students WHERE user_id = ?', [req.userId], (err, students) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ students });
    });
});

router.get('/student/:id/dashboard', authMiddleware, (req, res) => {
    const studentId = req.params.id;

    // Verify student belongs to user
    db.get('SELECT * FROM students WHERE id = ? AND user_id = ?', [studentId, req.userId], (err, student) => {
        if (err || !student) return res.status(404).json({ error: 'Student not found' });

        db.all(`
      SELECT c.*, g.percentage as current_grade, g.letter_grade 
      FROM courses c 
      LEFT JOIN grades g ON c.id = g.course_id 
      WHERE c.student_id = ?
    `, [studentId], (err, courses) => {
            if (err) return res.status(500).json({ error: 'Database error' });

            const courseIds = courses.map(c => c.id);
            if (courseIds.length === 0) return res.json({ student, courses: [], upcomingAssignments: [] });

            // Get categories
            db.all(`SELECT * FROM categories WHERE course_id IN (${courseIds.join(',')})`, [], (err, categories) => {

                // Get upcoming assignments (score is null or future due_date)
                const today = new Date().toISOString().split('T')[0];
                db.all(`
                    SELECT a.*, c.name as course_name 
                    FROM assignments a
                    JOIN courses c ON a.course_id = c.id
                    WHERE c.student_id = ? AND (a.score IS NULL OR a.due_date >= ?)
                    ORDER BY a.due_date ASC
                    LIMIT 5
                `, [studentId, today], (err, upcomingAssignments) => {

                    const enrichedCourses = courses.map(course => ({
                        ...course,
                        categories: categories?.filter(cat => cat.course_id === course.id) || []
                    }));

                    res.json({
                        student,
                        courses: enrichedCourses,
                        upcomingAssignments: upcomingAssignments || []
                    });
                });
            });
        });
    });
});

router.get('/student/:id/assignments', authMiddleware, (req, res) => {
    const studentId = req.params.id;

    // Verify student belongs to user
    db.get('SELECT * FROM students WHERE id = ? AND user_id = ?', [studentId, req.userId], (err, student) => {
        if (err || !student) return res.status(404).json({ error: 'Student not found' });

        db.all(`
            SELECT a.*, c.name as course_name 
            FROM assignments a
            JOIN courses c ON a.course_id = c.id
            WHERE c.student_id = ?
            ORDER BY a.due_date ASC
        `, [studentId], (err, assignments) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json({ assignments: assignments || [] });
        });
    });
});

router.get('/course/:id', authMiddleware, (req, res) => {
    const courseId = req.params.id;
    db.get(`
    SELECT c.*, g.percentage as overall_grade, g.letter_grade
    FROM courses c
    LEFT JOIN grades g ON c.id = g.course_id
    WHERE c.id = ?
  `, [courseId], (err, course) => {
        if (err || !course) return res.status(404).json({ error: 'Course not found' });

        db.all('SELECT * FROM categories WHERE course_id = ?', [courseId], (err, categories) => {
            db.all('SELECT * FROM assignments WHERE course_id = ? ORDER BY due_date DESC', [courseId], (err, assignments) => {
                res.json({
                    course,
                    categories: categories || [],
                    assignments: assignments || []
                });
            });
        });
    });
});

module.exports = router;
