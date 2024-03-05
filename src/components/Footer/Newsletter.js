export default function Newsletter() {
    return (
        <div className="bg-black grid grid-cols-newsletter gap-5 max-w-6xl mx-auto py-12 px-12 rounded-xl -translate-y-1/2">
            <h4 className="font-integral text-5xl uppercase leading-none text-white">Stay upto date about our latest offers</h4>
            <div className="grid gap-4">
                <div className="bg-white py-3 px-4 rounded-full flex gap-3 items-center self-start ">
                    <span className="text-2xl text-black/60 icon-[carbon--email]"></span>
                    <input className="bg-transparent outline-none w-full" placeholder="Enter your email address" type="email" />
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-full self-start border border-white hover:text-white hover:bg-black transition-colors">
                    Subscribe to Newsletter
                </button>
            </div>
        </div>
    );
}
