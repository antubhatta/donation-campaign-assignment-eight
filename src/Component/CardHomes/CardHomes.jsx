import { useEffect, useState } from "react";
import CardHome from "../CardHome/CardHome";
import Banner from "../Banner/Banner";

const CardHomes = () => {
    const [card, setCard] = useState([]);
    const [filteredCard, setFilteredCard] = useState([]);

    useEffect(() => {
        fetch('donate.json')
            .then(res => res.json())
            .then(data => {
                setCard(data);
                setFilteredCard(data);
            })
    }, []);

    const handleSearch = (searchQuery) => {
        if(searchQuery){
        const filteredDonations = card.filter((item) =>
            item.category.toLowerCase() === searchQuery.toLowerCase()
        );
        setFilteredCard(filteredDonations);}
        else {
            setFilteredCard(card);
        }
    };

    return (
        <div className="">
            <Banner onSearch={handleSearch} />
            <div className="container mx-auto mt-16 grid grid-cols-1 px-6 lg:px-0 md:grid-cols-2 mb-14 lg:mb-32 lg:grid-cols-4 gap-6">
                {filteredCard.map((donation) => (
                    <CardHome key={donation.id} card={donation}></CardHome>
                ))}
            </div>
        </div>
    );
};

export default CardHomes;