const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDb = require("./config/connectDb");
const app = express();
connectDb();
app.use(express.json());
const User = require("./model/User");

// add new user api
app.post("/add", async (req, res) => {
  const { fullname, email, phone } = req.body;
  try {
    const newUser = User({ fullname, email, phone });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

// edit user api
app.put("/user/edit/:id", async (req, res) => {
  try {
    const editedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(editedUser);
  } catch (error) {
    console.log(error.message);
  }
});

// get all users 

app.get("/getall" , async(req, res )=>{
  try {
    const allusers = await User.find();
    res.send(allusers)
  } catch (error) {
    console.log(error.message)
  }
})

// get one by id 

app.get("/user/getone/:id" , async(req, res) =>{
  try {
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch (error) {
    console.log(error.message)
  }
})

// delete 

app.delete("/user/delete/:id" , async(req, res)=>{
  try {
    await User.findByIdAndDelete(req.params.id)
    res.send("the user has been deleted")
  } catch (error) {
    console.log(error.message)
  }
})

const PORT = process.env.PORT || 6000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`the server run successefully in ${PORT}`)
);
