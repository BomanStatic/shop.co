import Link from "next/link";
import "./Bento.css";
export default function Bento() {
    return (
        <section className="bg-gray-200 max-w-6xl mx-auto rounded-xl p-8">
            <h2 className="uppercase text-5xl font-integral text-center py-10">Browse by dress style</h2>
            <div className="grid auto-rows-[240px] grid-cols-3 gap-4">
                <Link href="/" className="stacked bg-red-400 rounded-lg overflow-hidden">
                    <img className=" w-full h-full object-cover object-top" src="/bento/casual.png" alt="" />
                    <h3 className=" font-satoshi font-bold text-4xl p-8">Casual</h3>
                </Link>
                <Link href="/" className="stacked bg-green-400 col-span-2 rounded-lg overflow-hidden">
                    <img className=" w-full object-cover object-bottom" src="/bento/casual.png" alt="" />
                    <h3 className=" font-satoshi font-bold text-4xl p-8">Formal</h3>
                </Link>
                <Link href="/" className="stacked bg-orange-400 col-span-2 rounded-lg overflow-hidden">
                    <img className=" w-full h-full object-right-bottom" src="/bento/casual.png" alt="" />
                    <h3 className=" font-satoshi font-bold text-4xl p-8">Party</h3>
                </Link>
                <Link href="/" className="stacked bg-blue-400 rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover " src="/bento/casual.png" alt="" />
                    <h3 className=" font-satoshi font-bold text-4xl p-8">Gym</h3>
                </Link>
            </div>
        </section>
    );
}
