import { Spin } from 'antd';
import { useState } from 'react';
import { Result, Button, Card } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const OrderComplete=()=>{
      const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState(true);

    setTimeout(()=>{
        setIsLoading(false);
    }, 3000);

    return(
        <>
       

        {isLoading?(<>
            <div style={{width:"100px", margin:"auto", height:"300px", paddingTop:"100px"}}>
        
        <Spin />

       
        </div>    
        </>):(<>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
        <Result
          icon={<CheckCircleFilled className="text-green-500 text-6xl" />}
          title={<span className="text-2xl font-bold">Order Placed Successfully!</span>}
          subTitle={
            <div className="text-gray-600 mt-2">
              Thank you for shopping with us 🎉 <br />
              Your order has been confirmed and will be delivered soon.
            </div>
          }
          extra={[
            <Button
              key="home"
              type="primary"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>,

            <Button
              key="orders"
              type="default"
              className="border-gray-300"
              onClick={() => navigate("/cartdata")}
            >
              View Cart
            </Button>,
          ]}
        />

        {/* Order Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-500 text-sm">Order ID</p>
            <p className="font-semibold text-gray-800">#MIS123456</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-500 text-sm">Estimated Delivery</p>
            <p className="font-semibold text-gray-800">3 - 5 Working Days</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-500 text-sm">Payment Method</p>
            <p className="font-semibold text-gray-800">Cash on Delivery</p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-500 text-sm">Support</p>
            <p className="font-semibold text-gray-800">+91 98765 43210</p>
          </div>
        </div>
      </Card>
    </div>
        </>)}

        
       
         
        </>
    )
}

export default OrderComplete;