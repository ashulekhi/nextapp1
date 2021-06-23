import axios from "axios"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"

export default function ShowCake(props){
    var router  = useRouter()
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>" , router.query)
    var {cakeid} = router.query
    // var [cakedetails , setCakeDetails] = useState({})
    // useEffect(()=>{
    //     axios({
    //         method:"get",
    //         url:"https://apifromashu.herokuapp.com/api/cake/"+cakeid,
            // headers:{
            //    authoken:localStorage.token
          //  }
    //     }).then((response)=>{
    //          setCakeDetails(response.data.data)
    //     },(error)=>{
    //         console.log("Error for finding cake details from api")
    //     })
    // },[cakeid])
    return(
        <>
        Here we will show the cake details selected by user which is {cakeid}
        {props.cakedetails?.ratings}
        {props.cakedetails?.description}
        </>
    )
}

// Pre rendering of Page 

export async function getStaticProps(context){
    console.log("reading context in order to retrieve params" , context)
    var cakeid = context.params.cakeid
   var response =  await axios({
        method:"get",
        url:"https://apifromashu.herokuapp.com/api/cake/"+cakeid
    })
    return {
        props:{
            cakedetails: response.data.data
        }
    }
}

// getStaticPaths  needs to be used on when we have to define some of the statisc paths which are allowed

export async function getStaticPaths(){
   var paths = []
   var result = await axios({
        method:"get",
        url:"https://apifromashu.herokuapp.com/api/allcakes"
    })
    console.log("..... all cakes from api" , result.data.data)
    result.data.data.forEach((each)=>{
        var pathobj = {params:{cakeid:each.cakeid.toString()}}
        paths.push(pathobj)
    })
    console.log(">...................... paths allowed" , paths)
    return {
        paths:paths,
        fallback:false
    }
}

// 2 ways to handle 
// to check at the frontend
// and second is to check at api level 

