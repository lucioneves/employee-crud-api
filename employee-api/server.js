/**
 * arquivo: server.js
 * descrição: arquivo responsavel por toda a configuração e execução do Back-End ('Empoloyee')
 * Data: 08/07/24
 * author: Lucio Neves
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('Aplicação sendo executada na porta...: ', port);
});