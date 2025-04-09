var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://santosunny645:santocr7@cluster0.dtjlwct.mongodb.net/db4?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch((error) => {
    console.log(err);
  });
