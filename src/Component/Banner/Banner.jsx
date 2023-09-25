

const Banner = () => {
    return (
        <div>
            
            <div className="bg-[url('/bg.jfif')] h-[600px] bg-center flex flex-col gap-12 items-center justify-center bg-cover">
                <div className="absolute inset-0 w-full h-full bg-white/95"></div>
            <h2 className="text-2xl md:text-3xl z-10 lg:text-5xl font-bold text-center text-black">I Grow By Helping People In Need</h2>

            <div className="flex z-10 items-center h-[50px] justify-center">
              <input
                
                className="rounded-tl-lg rounded-bl-lg border border-solid border-[#11111126] md:w-[300px]  lg:w-[420px] mb-6 outline-none py-4 pl-4"
                placeholder="Search here..."
                type="text"
                
                
              />
              <button className="bg-[#FF1F3D] border border-[#FF1F3D] rounded-tl-0 rounded-tr-lg rounded-br-lg mb-6 rounded-bl-0 text-white text-base font-semibold px-7 py-4 mr-6"
              >
                Search
              </button>
            </div>
        </div>
        </div>
    );
};

export default Banner;