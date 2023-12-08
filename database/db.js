const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri = "mongodb+srv://Smit:D7LeEWGcowU1yUIR@cluster0.wxyidnw.mongodb.net/?retryWrites=true&w=majority"
const mongo = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => console.log(err.message));

module.exports = mongo;