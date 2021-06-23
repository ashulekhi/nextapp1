// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// import cors from "cors"

// const cors = Cors({
//   methods:['GET']
// })

// function middle(req,res,next){
//   return new Promise((resolve,reject)=>{
//     next(req,res,(result)=>{
//       if(result instanceof Error){
//         return reject(result) 
//       }

//       return resolve(result)
//     })
//   })

// }

export default async function handler(req, res) {
  // await middle(req,res,cors)

  res.status(200).json({ name: 'Will Worth' })
}
