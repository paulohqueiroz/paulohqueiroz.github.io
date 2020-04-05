const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
require("dotenv").config()
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")


const morgan  = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator")

const port = process.env.PORT || 8000
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {
      useNewUrlParser: true,
      useCreateIndex: true
  }
)
.then(() => console.log('DB Connected'))


//middlewares
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
})

app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)


app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})


