import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'

const app  = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

const baran = {
        title:"",
        subTitle:"",
        gitHub:"",
        linkedin:"",
        twitter:"",
        paragraph:"",
        photo:""
    
    }


app.get("/", (req,res) => {
    res.status(200).send(baran)
})


app.post("/", (req,res) =>{
     baran.title = req.body.title
     baran.subTitle = req.body.subTitle
     baran.gitHub = req.body.gitHub
     baran.linkedin = req.body.linkedin
     baran.twitter = req.body.twitter
     baran.paragraph = req.body.paragraph
     baran.photo = req.body.photo


     console.log(baran)
     res.redirect("http://localhost:3000")
    
})


app.listen(5500, console.log("5500 is active"))