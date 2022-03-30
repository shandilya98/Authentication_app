const  express               =  require('express');
const  app                   =  express();
const  mongoose              =  require("mongoose");
const  passport              =  require("passport");
const  bodyParser            =  require("body-parser");
const  LocalStrategy         =  require("passport-local");
const  User                  =  require("./models/User.js");
const  passportLocalMongoose =  require("passport-local-mongoose");
const  userRoute             =  require("./routes/authentication.js");
const loginPage              =  require("./view/pages/login.ejs");
const registerPage           = require("./view/pages/register.ejs");
const userprofilePage        = require("./view/pages/userprofile.ejs");
//  const  routes              =  express.Router();



 mongoose.connect("mongodb://localhost/user_authorization",
{ useNewUrlParser: true, useUnifiedTopology: true });
app.use(require("express-session")({ 
    secret:"Any normal Word",                  //decode or encode session
    resave: false,          
    saveUninitialized:false    
}));
passport.serializeUser(User.serializeUser());              //session encoding
passport.deserializeUser(User.deserializeUser());         //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth",userRoute);
app.use(express.Router());
app.use("/login",loginPage );
app.use("/register",registerPage);
app.use("/userprofile",userprofilePage);



app.listen(4000, () => {
    console.log("Backend server is running!");
  });
  
