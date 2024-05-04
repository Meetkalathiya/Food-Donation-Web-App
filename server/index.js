// const express = require("express");
// const mongoose = require('mongoose');
// const cors = require("cors");
// const DonaterModel = require('./models/Donater');
// const DonationModel = require('./models/Donation'); // Add this line

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/Donater");

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     DonaterModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("Success");
//                 } else {
//                     res.json("Incorrect password");
//                 }
//             } else {
//                 res.json("No record exists");
//             }
//         });
// });

// app.post('/register', (req, res) => {
//     DonaterModel.create(req.body)
//         .then(Donaters => res.json(Donaters))
//         .catch(err => res.json(err));
// });

// // Endpoint to handle donation submission
// app.post('/donate', (req, res) => {
//     DonationModel.create(req.body)
//         .then(donation => res.json(donation))
//         .catch(err => res.json(err));
// });

// app.listen(3001, () => {
//     console.log("Server is running");
// });


const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:3000", // Update the origin to match your frontend URL
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConfig = require("./config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection done with database");
  })
  .catch((err) => {
    console.log("error in db connection ", err);
    process.exit();
  });

const RegistrationRouter = require("./register/register.routes"); // Import the registration router
app.use("/api/register", RegistrationRouter); // Use the registration router at /api/register endpoint

const DonateRouter = require("./Donation/donation.routes");
app.use("/api/donate",DonateRouter);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log("Example app listening on port ${port}!"));