import Newsletter from "./Newsletter";
import FooterList from "./FooterList";
import Link from "next/link";

const LINKS = [
    {
        title: "Company",
        links: ["About", "Features", "Works", "Careers"],
    },
    {
        title: "Help",
        links: ["Customer Support", "Delivery Details", "Privacy Policy", "Terms & Conditions"],
    },
    {
        title: "FAQ",
        links: ["Account", "Manage Deliveries", "Orders", "Payments"],
    },
    {
        title: "Resources",
        links: ["Free eBooks", "Develpoment Tutorials", "How to - Blog", "Youtube playlist"],
    },
];
const SOCIALS = ["twitter", "facebook", "instagram", "github"];
export default function Footer() {
    return (
        <footer className=" relative mt-48 pb-12 bg-gray-200 rounded-t-xl">
            <Newsletter />
            <section className="max-w-6xl mx-auto -mt-12 flex justify-between">
                <div className="flex flex-col gap-5 flex-shrink basis-60">
                    <h1 className="font-integral text-3xl">Shop.co</h1>
                    <p className="text-black/60">
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                    <div className="flex gap-1 text-3xl">
                        <Link href="/">
                            <span className="icon-[carbon--logo-twitter]"></span>
                        </Link>
                        <Link href="/">
                            <span className="icon-[carbon--logo-facebook]"></span>
                        </Link>
                        <Link href="/">
                            <span className="icon-[carbon--logo-instagram]"></span>
                        </Link>
                        <Link href="/">
                            <span className="icon-[carbon--logo-github]"></span>
                        </Link>
                    </div>
                </div>
                {LINKS.map((list, index) => (
                    <FooterList key={index} list={list} />
                ))}
            </section>
            <div className="h-[1px] max-w-6xl mx-auto my-10 mb-5 bg-black/10"></div>
            <div className="flex justify-between max-w-6xl mx-auto">
                <p className="text-black/60">© 2000-2021, All rights reserved</p>
                <div className="flex gap-2 ">
                    <Link className="bg-white rounded-lg p-2 min-w-12 text-xs grid place-content-center" href="/">
                        <span className="icon-[logos--visa]"></span>
                    </Link>
                    <Link className="bg-white rounded-lg p-2 min-w-12 text-sm grid place-content-center" href="/">
                        <span className="icon-[logos--mastercard]"></span>
                    </Link>
                    <Link className="bg-white rounded-lg p-2 min-w-12 text-sm grid place-content-center" href="/">
                        <span className="icon-[logos--paypal]"></span>
                    </Link>
                    <Link className="bg-white rounded-lg p-2 min-w-12 text-sm grid place-content-center" href="/">
                        <span className="icon-[logos--apple-pay]"></span>
                    </Link>
                    <Link className="bg-white rounded-lg px-2 min-w-12 text-sm grid place-content-center" href="/">
                        <span className="icon-[logos--google-pay]"></span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
