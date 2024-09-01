const UserList = require("../models/user");

const submitContactData = async(req,res) =>{
    console.log(req.body)
    try {
     const userData = new UserList(req.body);
      const details = await userData.save()
      console.log(details)
     if(!details){
         res.status(400).send({message:"please give me full details"})
     }else{
         res.status(201).render("index")
     }
    } catch (error) {console.log(error)

     res.status(500).send(error)
    }
 }
 module.exports = submitContactData