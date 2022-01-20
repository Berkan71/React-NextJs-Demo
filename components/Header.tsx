import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="medium" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <button>About</button>
                    <button>Contact</button>
                    <button className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</button>
                </div>
            </div>
                
            <div className="flex items-center space-x-5 text-green-600">
                <button className="cursor-pointer">
                    Sign In
                </button>
                <button className="cursor-pointer border px-4 py-1 rounded-full border-green-600 hover:bg-green-700 hover:text-white transition-color duration-200 ease-in-out">
                    Get Started
                </button>
            </div>
        </header>
    );
}
export default Header;

