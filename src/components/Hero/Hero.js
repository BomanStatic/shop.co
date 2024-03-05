import Link from "next/link";
import "./Hero.css";
export default function Hero() {
    return (
        <section className="section-hero">
            <img className="w-full object-cover" src="/hero_img.png" alt="" />
            <div className="max-w-2xl pt-12 pl-4 grid gap-4 justify-items-start place-content-start">
                <h1 className="font-integral text-hero uppercase leading-none">Find Clothes that matches your style</h1>
                <p className="max-w-xl text-black/60">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to
                    your sense of style.
                </p>
                <Link className="bg-black text-white font-medium mt-4 px-20 py-4 rounded-full" href="/">
                    Shop now
                </Link>
                <div className="flex gap-8 pt-8">
                    <div className="">
                        <h2 className="font-bold text-4xl">200+</h2>
                        <p>International Brands</p>
                    </div>
                    <div className=" h-full w-[1px] bg-black/10"></div>
                    <div className="">
                        <h2 className="font-bold text-4xl">2,000+</h2>
                        <p>High-Quality Products</p>
                    </div>
                    <div className=" h-full w-[1px] bg-black/10"></div>
                    <div className="">
                        <h2 className="font-bold text-4xl">30,000+</h2>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
