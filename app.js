const Express = require("express")
const Mongoose = require("mongoose")
const Cors = require("cors")
const Bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("./models/users")

let app = Express()

app.use(Express.json())
app.use(Cors())

Mongoose.connect("mongodb+srv://harshitha2001:harsh2001@cluster0.wludpyh.mongodb.net/trainAppDB?retryWrites=true&w=majority&appName=Cluster0")



app.post("/signUp", async (req, res) => {

    let input = req.body
    let hashedPassword = Bcrypt.hashSync(req.body.password, 10)
    console.log(hashedPassword)
    req.body.password = hashedPassword


    userModel.find({ email: req.body.email }).then(
        (items) => {


            if (items.length > 0) {
                res.json({ "status": "email id already exist" })
            } else {
                let result = new userModel(input)
                result.save()
                res.json({ "status": "success" })
            }



        }
    ).catch(

    )





})

app.listen(3031, () => {
    console.log("Server started")
})