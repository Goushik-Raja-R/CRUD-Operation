const db=require('../db');

//Display all the data in the Database
module.exports.getAllEmployees=async ()=>{
    const [record]= await db.query("SELECT *FROM EMPLOYEE")
    return record;
}

//Display Particular data
module.exports.getAllEmployeeByID=async (id)=>{
    const [record]= await db.query("SELECT *FROM EMPLOYEE WHERE ID = ?", [id])
    return record;
}

//Delete the data in database
module.exports.DeleteEmployee=async (id)=>{
    const [{affectedRows}]= await db.query("DELETE FROM EMPLOYEE WHERE ID = ?", [id])
    return affectedRows;
}

//Insert and Update Operation
module.exports.AddOrEditEmployee=async (obj,EMP_ID=0)=>{
    const[data]= await db.query("CALL usp_employee_add_or_edit(?,?,?,?)", 
    [EMP_ID,obj.EMPNAME,obj.EMPCODE,obj.EMPSALARY])
    return data;
}  