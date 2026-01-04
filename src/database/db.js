const mongoose = require('mongoose');

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose.connect(
      "mongodb+srv://root:root@cluster0.iblp79g.mongodb.net/?appName=Cluster0"
    )
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
