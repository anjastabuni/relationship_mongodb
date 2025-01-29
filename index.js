const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/relasion_db")
  .then((result) => {
    console.log("conected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  addresses: [
    {
      _id: false,
      street: String,
      city: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

// const makeUser = async () => {
//   const user = new User({
//     name: "John Doe",
//   });

//   user.addresses.push({
//     street: "123 Main St",
//     city: "Anytown",
//     country: "USA",
//   });

//   const res = await user.save();
//   console.log(res);
// };

// makeUser();

const addAddress = async (id) => {
  const user = await User.findById(id);

  user.addresses.push({
    street: "123 Main St",
    city: "Anytown",
    country: "INA",
  });

  const res = await user.save();
  console.log(res);
};

addAddress("67997a890359ca33376521eb");
