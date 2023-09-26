import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { donationItem, getStoredDonation } from "../LocalStorage/LocalStorage";

const CardDetails = () => {
    const details=useLoaderData()
    const donatedData = getStoredDonation()
    const {id}=useParams()
    const idInt=parseInt(id)
    const cardDetails=details.find(card=>card.id===idInt)
    const handleDonate=()=>{
        const isExits = donatedData.find(donation  => donation === idInt);

        if(isExits) {
            return toast('Already Donated.')
        }
    
        donationItem(idInt)
        toast('This items added successfully')
    }
   
    return (
        <div className="pt-[140px] lg:pt-[170px] px-6 lg:px-0 container mx-auto relative">
           <div className="relative">
           <img className="w-full object-cover rounded-lg" src={cardDetails.img} alt="" />

           <div className="absolute bottom-0 left-0 w-full rounded-t-lg rounded-b-lg h-auto md:h-[150px] bg-[#0B0B0B80] flex items-center">
            <Link ><button onClick={handleDonate} style={{backgroundColor:cardDetails.text_button_bg_color}} className="text-sm lg:text-base ml-8 text-[#FFF] font-semibold px-4 py-3 lg:px-6 lg:py-4">Donate ${cardDetails.price}</button></Link>
            </div>
           </div>
            
           
           
            
            <h3 className="text-2xl  lg:text-4xl text-[#0B0B0B] font-bold mt-12">{cardDetails.title}</h3>
            <p className="text-[#0B0B0BB2] text-base font-normal mt-6 mb-16 lg:mb-28"> {cardDetails.description}</p>
            <ToastContainer/>
        </div>
    );
};

export default CardDetails;