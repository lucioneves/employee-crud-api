/**
 * arquivo: routes/employee-routes.js
 * descrição: arquivo responsavel pelas rotas da API
 * data:10/07/24
 * author: Lucio Neves
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// => Definindo as rotas do CRUD - 'Employee'

//=> Rota responsavel por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

//=> Rota responsável por listar todos os 'Coloboradores': (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

module.exports = router;


