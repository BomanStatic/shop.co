import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";

export default function NewArrivals() {
    return (
        <section className="my-10 md:max-w-6xl mx-auto grid ">
            <h2 className="uppercase text-5xl font-integral text-center py-4 pt-8">New Arrivals</h2>
            <div className="h-[1px] w-full bg-black my-5"></div>
            <div className="grid grid-cols-4 gap-5">
                <ProductCard name="T-shirt with tape details" img="/products/tshirt.png" price={120} rating={3.5} discount={10} />
                <ProductCard name="Skinny fit jeans" img="/products/jeans.png" price={240} rating={4} discount={0} />
                <ProductCard name="T-shirt with tape details" img="/products/tshirt.png" price={120} rating={3.5} discount={10} />
                <ProductCard name="Skinny fit jeans" img="/products/jeans.png" price={240} rating={4} discount={0} />
            </div>
            <Link
                href="/"
                className="px-20 py-3 font-medium border rounded-full place-self-center mt-10 transition-colors hover:bg-black hover:text-white "
            >
                View All
            </Link>
        </section>
    );
}
