SELECT students.name as students_name, 
cohorts.name as cohorts_name, 
students.start_date as students_start_date, 
cohorts.start_date as cohort_start_date
FROM students 
JOIN cohorts ON cohorts.id = cohort_id
WHERE students.start_date != cohorts.start_date
ORDER BY cohort_start_date;
