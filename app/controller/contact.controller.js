const db = require("../models");
const Contact = db.contact;

// Create and Save a new Contact
exports.create = (req, res) => {
    console.log(req.body.name);
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    
      // Create a Contact
      const contactNew = new Contact({
        name:  req.body.name,
        address:  req.body.address,
        mobile:  req.body.mobile,
        email:  req.body.email
      });
    
      // Save Contact in the database
      contactNew
        .save(contactNew)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Contact."
          });
        });
};

// Retrieve all Contact from the database.
exports.findAll = (req, res) => {
    Contact.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Contact with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contact.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Contact with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error Contact Contact with id=" + id });
      });
};



// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
console.log(req.params.id);
  Contact.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
        });
      } else {
        res.send({
          message: "Contact was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contact with id=" + id
      });
    });
};
