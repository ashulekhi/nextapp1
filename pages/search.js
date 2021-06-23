import axios from "axios"
import {useRouter} from "next/router"
let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="

export default function Search(props){
    console.log("props of search cakes" , props)
    var router = useRouter()
    console.log("router " , router)
    return (
        <>
        Search Page . 
        <h1>Showing Results for  {router.query.q}</h1>
        </>
    )
}

export async function getServerSideProps(context){
    console.log("query from context" , context.query)
   var response  =  await   axios({
        method:"get",
        url:apiurl+context.query.q
    })
    return {
        props:{
            searchresults:response.data.data
        }
    }
}

//In next js it is a limitation that we cant pre fetch the data in case of queries for that we may use srver side generation of pages 


// receive the query 
// hit the api with query 
// display to user 

// As per next js we have learnt data fetching in pre-rendering 
// what types of pre rendering are there 

// static generation of pages
// server side generation of pages

// data fetching is not possible in static generation pf pages in case of query 
// static generation takes place at build time and at build time we can't figure out what query user may ask 

// so ,we are going to use server side gneration of pages if want to otherwise normal react concepts 
