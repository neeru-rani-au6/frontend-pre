const mongoose = require("mongoose");

async function init() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
}

init();
