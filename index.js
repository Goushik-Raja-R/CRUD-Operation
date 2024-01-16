const express=require('express'),
 app=express();
 bodyparser=require('body-parser')
require('express-async-errors');

const bodyParser = require('body-parser');
const db=require('./db'),
employeeRoutes=require('./Controller/employee.controller')
 
//middleware
app.use(bodyparser.json())
app.use('/api/employees', employeeRoutes)

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went Wrong')
})

//First make the sure the db is connected
//Then check the server
db.query("SELECT 1")
    .then(() => {
         console.log('db connectiom succeeded')
         app.listen(1034,
             ()=> console.log('server started at 1034'))
    })
    .catch(err => console.log('db connection failes. \n'+err))

