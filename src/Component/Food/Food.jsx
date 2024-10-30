
const Food = ({food,handleOrder}) => {
    // console.log('food',food);
    const {id,name,img,description,calories,time,price} = food
    return (
            <div className="border border-[#deb887] p-3 rounded-lg space-y-2">

            <img className=" w-full h-[200px] object-cover rounded-lg" src={img} alt="" />
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-[#878787]">{description} .</p>
            <p>Price : {price} tk.</p>
            <p className="text-[#878787]">Calories : {calories} .</p>
            <div>
                <button onClick={()=>handleOrder(food, id)}
                 className="bg-[#0BE58A] py-1 px-3 rounded-xl font-medium-">
                    Add Order</button>
            </div>
            </div>
    );
};

export default Food;