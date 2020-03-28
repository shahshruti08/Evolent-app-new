  module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
          address: String,
          mobile: String,
          email: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const contact = mongoose.model("contactDetail", schema);
    return contact;
  };