import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { donationItem } from "../LocalStorage/LocalStorage";

const CardDetails = () => {
    const details=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)
    const cardDetails=details.find(card=>card.id===idInt)
    const handleDonate=()=>{
        donationItem(idInt)
        toast('This items added successfully')
    }
   
    return (
        <div className="pt-[170px] container mx-auto relative">
            <img className="w-full rounded-lg" src={cardDetails.img} alt="" />
            
            <div className="absolute ml-8 -mt-24">
            <Link ><button onClick={handleDonate} style={{backgroundColor:cardDetails.text_button_bg_color}} className="text-base text-[#FFF] font-semibold px-6 py-4">Donate ${cardDetails.price}</button></Link>
            </div>
            <h3 className="text-4xl text-[#0B0B0B] font-bold mt-12">{cardDetails.title}</h3>
            <p className="text-[#0B0B0BB2] text-base font-normal mt-6 mb-28"> {cardDetails.description}</p>
            <ToastContainer/>
        </div>
    );
};

export default CardDetails;