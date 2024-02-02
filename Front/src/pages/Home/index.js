import CarouselHome from "../../components/Carousel";
import NavBar from "../../components/NavBar";
import ProductsHome from "../../components/ProductsHome";


export default function HomePage(){
    return(
        <>
            <NavBar/>
            <CarouselHome/>
            <ProductsHome/>
        </>
    )
}