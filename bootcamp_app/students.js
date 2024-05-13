const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

/**
 * query to obtain students with student id, name and cohort.
 */

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];

const queryString =  `
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts
ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

console.log(queryString);

pool
  .query(queryString, values)
  .then((res)=> {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));
