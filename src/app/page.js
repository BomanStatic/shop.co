import Brands from "@/components/Brands/Brands";
import Hero from "@/components/Hero/Hero";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import TopSellers from "@/components/TopSellers/TopSellers";
import Bento from "@/components/Bento/Bento";
import Testimonials from "@/components/Testimonials/Testimonials";
export default function Home() {
    return (
        <>
            <Hero />
            <Brands />
            <NewArrivals />
            <div className="h-[1px] max-w-6xl bg-black/10 mx-auto my-10"></div>
            <TopSellers />
            <Bento />
            <Testimonials />
        </>
    );
}
