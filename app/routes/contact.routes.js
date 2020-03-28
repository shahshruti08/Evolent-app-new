module.exports = app => {
    const contact = require("../controller/contact.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", contact.create);
  
    // Retrieve all contact
    router.get("/", contact.findAll);
  
   
  
    // Retrieve a single Tutorial with id
    router.get("/:id", contact.findOne);
  
  
    // Delete a Tutorial with id
    router.delete("/:id", contact.delete);
  
  
    app.use('/api/contact', router);
  };