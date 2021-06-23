import Link from "next/link"
import Image from "next/image"

export default function Cake(props){
    return (
        <Link href={`/cakes/${props.data.cakeid}`}><div className="card" style={{width: "18rem"}} passHref>
  <Image src={props.data.image} style={{height:"200px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.data.name}</h5>
    <p className="card-text">{props.data.price}</p>
  </div>
</div></Link>
    )
}