import { Link } from "react-router-dom";

const Donations = ({donates}) => {
    const {img,title,category,price,button_bg,card_bg_color,text_button_bg_color}=donates
    return (
        <div style={{backgroundColor:card_bg_color}} className="rounded-lg flex w-auto gap-6">
           <img className="w-[220px] h-auto rounded-tl-md rounded-bl-md" src={img} alt="" /> 
           <div>
            <button style={{backgroundColor:button_bg,color:text_button_bg_color}} className="mt-7 mb-3 text-sm font-medium rounded py-1 px-3 ">{category}</button>
            <h3 className="text-base lg:text-2xl text-[#0B0B0B] font-semibold mb-1">{title}</h3>
            <p style={{color:text_button_bg_color}} className="text-sm lg:text-base font-semibold mb-5 ">${price}</p>
            <Link><button style={{backgroundColor:text_button_bg_color}} className="py-2 px-4 mb-8 rounded text-sm lg:text-lg font-semibold text-[#FFF]">View Details</button></Link>

           </div>
        </div>
    );
};

export default Donations;