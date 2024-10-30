import { AiOutlineDelete } from "react-icons/ai";
const SingleOrder = ({singleOrder,removeOrder}) => {
    const{id,img, name, calories} = singleOrder
    return (
        <div className="flex justify-between items-center mb-3">
            <img className="w-[40px] h-[40px] object-cover rounded-full" src={img} alt="" />
            <h2 className="text-sm font-semibold">{name}.</h2>
            <p className="text-sm font-semibold">calories : {calories}.</p>
            <div>
                <button onClick={()=>removeOrder(id)}
                    className="text-red-600 text-2xl">
                    <AiOutlineDelete /></button>
            </div>
        </div>
    );
};

export default SingleOrder;