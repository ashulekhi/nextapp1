import axios from "axios"

export default function Cart(props){
    let placeOrder =  function(){
        axios({
            method:'post',
            url:"/api/addorder",
            data:{
                cart:[]
            }
        }).then((response)=>{
            console.log("response from add order api" , response.data)
        },(error)=>{
            console.log("error from add order api" , error)
        })
    }
    return (
        <>
            {props.name}  Cart page 

            <button onClick={placeOrder
            }>Place Order</button>
        </>
    )}


    // export async function getStaticProps(){
    //     console.log(">>>>>>>>>>>>>>>>>>> running at server" , process.env.BASE_URL)
    //     return {
    //         props:{
    //             name:"Ashu Lekhi"
    //         }
    //     }
    // }