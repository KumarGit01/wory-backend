const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@carrierlink.kzaoemv.mongodb.net/`)
  .then(() => console.log('Connected to MongoDB', mongoose.connection.name))
  .catch((error) => console.log('Error connecting to MongoDB', error));


  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
