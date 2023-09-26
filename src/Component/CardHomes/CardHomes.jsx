import { useEffect, useState } from "react";
import CardHome from "../CardHome/CardHome";


const CardHomes = () => {
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch('donate.json')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div className="container mx-auto">
            <div className="mt-16 grid grid-cols-1 px-6 lg:px-0 md:grid-cols-2 mb-14 lg:mb-32 lg:grid-cols-4 gap-6">
            {
                card.map(card=><CardHome key={card.id} card={card}></CardHome>)
            }
            </div>
        </div>
    );
};

export default CardHomes;