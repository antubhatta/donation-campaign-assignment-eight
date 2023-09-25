import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../LocalStorage/LocalStorage";
import Donations from "../Donations/donations";

const Donation = () => {
    const [donation,setDonation]=useState([])
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
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-40 pt-[170px]">
                {
                    donation.map((donate,idx)=><Donations key={idx} donates={donate}></Donations>)
                }
            </div>
        </div>
    );
};

export default Donation;