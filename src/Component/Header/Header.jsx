import { NavLink,Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'


const Header = () => {
    return (
        <div className='absolute z-20 w-full'>
             <div className='flex justify-between px-5 lg:px-0 items-center container mt-8 mx-auto'>
            <Link to="/">
                <img className='w-[150px] md:w-auto' src={logo} alt="" />
            </Link>
            <div className='flex text-sm gap-3 md:gap-12 md:text-xl'>
                <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>Home</NavLink>
                <NavLink to="/donation" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#FF1F3D] underline" : "" }>Donation</NavLink>
                <NavLink to="/statistics" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#FF1F3D] underline" : "" }>Statistics</NavLink>
            </div>
            
        </div>
        
        </div>
    );
};

export default Header;