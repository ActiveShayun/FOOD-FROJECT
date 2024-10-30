import { CiSearch } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
const Nav = () => {
    return (
        <div>
            <nav className="max-w-screen-xl flex justify-between items-center mx-auto">
                <div>
                     <h2 className="text-2xl font-bold">Recipe Calories</h2>
                </div>
                <ul className="flex items-center gap-6">
                    <li className="font-normal"><a href="">Home</a></li>
                    <li className="font-normal"><a href="">Recipes</a></li>
                    <li className="font-normal"><a href="">About</a></li>
                    <li className="font-normal"><a href="">Search</a></li>
                </ul>
                <div className="flex items-center gap-3">
                    <form action="" >
                       <span className="flex items-center gap-3 bg-[#150B2B0D] p-3 rounded-full">
                       < CiSearch className="text-2xl"></CiSearch>
                       <input className="py-1 px-3 rounded-full" type="text" placeholder="Search" />
                       </span>
                    </form>
                    <div>
                        <span className="text-4xl text-green-500"><FaPersonBreastfeeding /></span>
                    </div>
                </div>
            </nav>
       
        </div>
    );
};

export default Nav;