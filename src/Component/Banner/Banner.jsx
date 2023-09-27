import { useState } from "react";

const Banner = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState(""); 

    const handleSearchClick = () => {
        
        onSearch(searchQuery);
    };

    return (
        <div className="relative">
            <div
                className="bg-[url('/bg.jfif')] h-[400px] lg:h-[600px] bg-center flex flex-col gap-12 items-center justify-center bg-cover"
                style={{ position: "relative" }}
            >
                <div className="absolute inset-0 w-full h-full bg-white/95"></div>
                <h2 className="text-xl md:text-3xl z-10 lg:text-5xl font-bold text-center text-black">I Grow By Helping People In Need</h2>
                <div className="flex z-10 items-center h-[50px] justify-center">
                    <input
                        className="rounded-tl-lg rounded-bl-lg border border-solid border-[#11111126] md:w-[300px] lg:w-[420px] mb-6 outline-none ml-5 lg:ml-0 py-4 pl-4"
                        placeholder="Search here..."
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                    />
                    <button
                        className="bg-[#FF1F3D] border border-[#FF1F3D] rounded-tl-0 rounded-tr-lg rounded-br-lg mb-6 rounded-bl-0 text-white text-base font-semibold px-7 py-4 mr-6"
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;