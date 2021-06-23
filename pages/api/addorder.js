import fs from "fs"



export default function handler(req,res){
    console.log("req body" , req.body)
    var data = fs.readFileSync('./hello.js')
    console.log("................. " , data)
     if(!req.body.price)
     return res.status(500).send({
         error:"Internal Server Error"
     }) 
     
     res.send({
        message:"ORDER placed!!"
    })
}