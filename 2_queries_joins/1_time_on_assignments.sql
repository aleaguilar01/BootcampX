SELECT SUM(ass.duration) as total_duration
FROM assignment_submissions as ass
JOIN students ON student_id = students.id
WHERE students.name = 'Ibrahim Schimmel';
