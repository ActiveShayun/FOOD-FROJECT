import SingleOrder from "../SingleOrder/SingleOrder";

const OrderList = ({order,removeOrder}) => {
   console.log('order',order);
    return (
        <div>
            <h2 className="text-2xl font-medium mb-4">Your Foods Order List :
                 <span className="text-[#0BE58A]"> {order.length}</span> .</h2>
                 <div className="text-lg font-semibold flex items-center justify-between mb-3">
                     <p>Image</p>
                     <h2>Name</h2>
                     <p>calories</p>
                    </div>
                 <div>
                   {
                    order.map(singleOrder => 
                    <SingleOrder 
                    removeOrder={removeOrder}
                    key={singleOrder.id}
                    singleOrder={singleOrder}>
                    </SingleOrder>)
                   }
                 </div>
        </div>
    );
};

export default OrderList;