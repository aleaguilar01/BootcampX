SELECT day, COUNT(*) as total_assignaments
FROM assignments
GROUP BY day
HAVING COUNT(*) >= 10
ORDER BY day;