/**
 * arquivo: routes/employee-routes.js
 * descrição: arquivo responsavel pela logica do   CRUD (API - Employee)
 * data:10/07/24
 * author: Lucio Neves
 */

const db = require('../config/database');

//=> Método responsavel por criar um novo 'Employee':
exports.createEmployee = async(req, res) => {
    const { name, job_role, salary, birth, employee_registration } = req.body;
    const { rows } = await db.query(
        "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, job_role, salary, birth, employee_registration]
    );

    res.status(201).send({
        message: 'Employee added successfully!',
        body: {
            employee: { name, job_role, salary, birth, employee_registration}
        },
    });
};
