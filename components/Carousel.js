import Image from "next/image"
import Carousel1 from "../public/carousel1.jpg"
import Carousel2 from "../public/carousel2.png"

export default function Carousel(){
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={Carousel1}></Image>
    </div>
    <div className="carousel-item">
      <Image src={Carousel2}></Image>
    </div>
    <div className="carousel-item">
    <Image height="300" width="300" src="/carousel3.png"></Image>
     
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    )
}