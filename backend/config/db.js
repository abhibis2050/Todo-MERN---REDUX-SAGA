const mongoose = require("mongoose");

const connectWithMongodb = async () => {
  try {
    mongoose.set("strictQuery", false);
    
// const MONGO_URL  = "mongodb://127.0.0.1:27017/Redux-Test"

    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    mongoose.connection
      .once("open", () => {
        console.log("Connected to mongodb");
      })
      .on("error", (error) => {
        console.log("Error connecting to mongodb", error);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectWithMongodb;
