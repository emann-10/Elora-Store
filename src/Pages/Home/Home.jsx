import Hero from '../../Components/Hero/Hero';
import BestSellers from '../../Components/Products/BestSellers/BestSellers';
import NewArrivals from '../../Components/Products/NewArrivals/NewArrivals';

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <NewArrivals></NewArrivals>
            <BestSellers></BestSellers>

        </>
    )
}