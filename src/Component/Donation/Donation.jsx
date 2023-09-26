import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../LocalStorage/LocalStorage";
import Donations from "../Donations/donations";

const Donation = () => {
    const [donation,setDonation]=useState([])
    const [dataLength,setDataLength]=useState(4)
    const donate=useLoaderData()
   

    useEffect(()=>{
        const donateItem=getStoredDonation()
        if(donate.length>0){
            const donationsItems=[]
            for (const id of donateItem){
              
                const donations=donate.find(donate=>donate.id===id)
               
                if(donations){
                    donationsItems.push(donations)
                }
            }
            setDonation(donationsItems)
          
        }
       
    },[donate])
    return (
        <div className="container mx-auto mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[170px]">
                {
                    donation.slice(0,dataLength).map((donate,idx)=><Donations key={idx} donates={donate}></Donations>)
                }
            </div>
            <div className={dataLength===donation.length && 'hidden'}>
            <div className="mt-10 flex justify-center">
                <button onClick={()=>setDataLength(donation.length)} className="text-[#FFF] bg-[#009444] text-base font-semibold py-4 px-7 rounded-lg">See All</button>
            </div>
            </div>
        </div>
    );
};

export default Donation;