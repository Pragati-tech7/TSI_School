const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./src/db/conn.js");
const Register = require("./src/models/register.js");

const port = process.env.PORT || 3005;
const static_path = path.join(__dirname, "../ENQUIRY/public" );
const template_path = path.join(__dirname, "../ENQUIRY/templates/views");
const partials_path = path.join(__dirname, "../ENQUIRY/templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) =>{
    res.render("index")
});

app.get("/classroom", (req, res) => {
    res.render("classroom");
})

app.get("/laboratories", (req, res) => {
    res.render("laboratories");
})
app.get("/basketball", (req, res) => {
    res.render("basketball");
})

app.get("/cultural", (req, res) => {
    res.render("cultural");
})
app.get("/admission", (req, res) => {
    res.render("admission");
})

app.get("/index", (req, res) => {
    res.render("index");
})
app.get("/auditorium", (req, res) => {
    res.render("auditorium");
})
app.get("/mandatoryd", (req, res) => {
    res.render("mandatoryd");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/sports", (req, res) => {
    res.render("sports");
})
app.get("/studentcouncil", (req, res) => {
    res.render("studentcouncil");
})
app.get("/cultural", (req, res) => {
    res.render("cultural");
})


// CREATE A NEW USER IN OUR DATABASE
app.post("/admission", async (req, res) => {
    try {
        

        const studentRegistration = new Register({
            name : req.body.name,
            guardian_name: req.body.guardian_name,
            dob : req.body.dob,
            admission_class : req.body.admission_class,
            last_class : req.body.last_class,
            prev_school_name : req.body.prev_school_name,
            email: req.body.email,
            number : req. body.number,
            message : req.body.message
        })

        const registered = await studentRegistration.save();
        res.status(201).render("admission");

    }catch (error){
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})