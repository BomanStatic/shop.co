export default function ShoppingCart({ isMenuOpen, setIsMenuOpen }) {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <aside
            className={`fixed flex flex-col gap-4 top-0 right-0 max-w-sm w-full h-screen z-20 px-4 py-8 bg-gray-100 transition-all duration-200 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <button type="button" onClick={() => toggleMenu()} className="absolute top-2 right-2 text-3xl">
                <span className="icon-[carbon--close]"></span>
            </button>
            <h2 className="font-integral text-3xl text-center">Your cart</h2>
            <div className="border grid border-black/10 rounded-3xl h-full w-full">
                <p className="text-center place-self-center">Your cart is empty</p>
            </div>
        </aside>
    );
}
