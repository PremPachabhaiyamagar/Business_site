const handlerContactForm = async(req,res) =>{
    try {
     const userData = new UserList(req.body);
      const details = await userData.save()
     if(!details){
         res.status(400).send()
     }else{
         res.status(201).render("index")
     }
    } catch (error) {
     res.status(500).send(error)
    }
 }
 module.exports = handlerContactForm