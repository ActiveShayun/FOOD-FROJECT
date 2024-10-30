import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import OrderList from "../OrderList/OrderList";
;

const Foods = () => {
    
    const [foods, setFoods] = useState([])
    const [order, setOrder] = useState([])
    useEffect(() => {
       fetch('Foods.json')
       .then(res => res.json())
       .then(data => setFoods(data))
    },[])
    console.log('foods',foods)


    const handleOrder = (food,id)=>{
        console.log(id);
       const newOrder = [...order,food]
       setOrder(newOrder)
    }

    const removeOrder = (id) =>{
      const remove = order.filter(o => o.id !== id)
        setOrder(remove)
    }
 
    return (
        <div className="max-w-screen-xl mx-auto mt-20 grid grid-cols-8 gap-3 justify-between">
            <div className="grid grid-cols-3 gap-3 col-span-6">
                {
                  foods.map(food => 
                  <Food 
                  handleOrder={handleOrder}
                  key={food.id} 
                  food={food}></Food>)
                }
            </div>
            <div className="grid-cols-2 border border-[#deb887] w-[313px] p-3 rounded-lg">
                <OrderList 
                removeOrder={removeOrder}
                order={order}></OrderList>
            </div>
        </div>
    );
};

export default Foods;