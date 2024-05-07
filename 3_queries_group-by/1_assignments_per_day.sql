SELECT day, COUNT(assignments.*) as total_assignaments
FROM assignments
GROUP BY day
ORDER BY day;