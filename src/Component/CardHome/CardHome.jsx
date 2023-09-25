const CardHome = ({card}) => {
    const {img,title,category,button_bg,card_bg_color,text_button_bg_color}=card
    return (
        <div style={{backgroundColor:card_bg_color}} className="rounded-lg">
            <img className="w-full h-[194px] rounded-tl-8 rounded-tr-8" src={img} alt="" />
            <button style={{backgroundColor:button_bg,color:text_button_bg_color}} className="mt-5 text-sm font-medium rounded py-1 px-3 ml-4">{category}</button>
            <h3 style={{color:text_button_bg_color}} className="text-base font-semibold mt-3 pl-4 pb-4">{title}</h3>
        </div>
    );
};

export default CardHome;