const express=require('express'),
   router=express.Router()

const e = require('express')

//http:localhost:1034/api/employees/

const service = require('../services/employee.service')

 router.get('/',async(req,res) =>{
    const employees = await service.getAllEmployees()
    res.send(employees)
    })

   router.get('/:id',async(req,res) =>{
     const employee = await service.getAllEmployeeByID(req.params.id)
     if(employee.length==0)
     res.status(404).json("No Record Found with givem ID: "+req.params.id)
     else
     res.send(employee)
     })

   router.delete('/:id',async(req,res) =>{
      const affectedRows = await service.DeleteEmployee(req.params.id)
      if(affectedRows==0)
      res.status(404).json("No Record Found with givem ID: "+req.params.id)
      else
      res.send("Deleted Successfully")
      })

   router.post('/',async(req,res) =>{
      await service.AddOrEditEmployee(req.body)
      res.status(201).send("Created Successfully")
       })
      
   router.put('/:EMP_ID',async(req,res) =>{
       const affectedRows = await service.AddOrEditEmployee(req.body,req.params.EMP_ID)
       res.status(201).send("created successfully")
       })
   

 module.exports=router;