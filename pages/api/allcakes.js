export default function handler(req,res){
    console.log("Here we will return json")
    res.json({
        data:[{name:"Some dummy cake", cakeid:"Some id" , image:"Some cake image"}]
    })
}