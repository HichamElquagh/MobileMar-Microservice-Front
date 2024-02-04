


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const [customerName, setCustomerName] = useState(null);
  const [customerEmail, setCustomerEmail] = useState(null);
  const [status, setStatus] = useState(null);
  const [amount, setAmount] = useState(0);

  const [data, setData] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('sessionId');
  const token = searchParams.get('token');
  const ttoken = searchParams.get('ttoken');
  const orderId = searchParams.get('orderId')

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        
        if (sessionId) {

          const response = await axios.post(
            "http://localhost:3000/Payments/payment-status",
            { sessionId: sessionId }
          );
          const paymentStatus = response.data.paymentStatus.paymentStatus;
          console.log(paymentStatus);
          
          setData(paymentStatus);

            setCustomerName(paymentStatus.customer_details.name);
            setCustomerEmail(paymentStatus.customer_details.email);
          
          setStatus(paymentStatus.status);
          setAmount(paymentStatus.amount_total);

    }else if(token){
      
        const response = await axios.post('http://localhost:3000/Payments/Paypal/Confirm_Payment/'+orderId, {token: token , ttoken: ttoken});
        console.log(response.data);
        const paypal = response.data
        setData(paypal);

        setCustomerName(paypal.payer.name.given_name.concat(' ', paypal.payer.name.surname));
        setCustomerEmail(paypal.payer.email_address);
      
      setStatus(paypal.status);
      setAmount(paypal.purchase_units[0].payments.captures[0].amount.value);      
    }
  } catch (error) {
    
  }
}
fetchPaymentStatus();


  }, [sessionId]);

  return (
    <div>
      {data ? (
       <div className="p-20 bg-orange-200">
       <h1 className="text-orange-400 font-bold mb-4">Success</h1>
       <div className="bg-white rounded-lg shadow-2xl md:flex">
           <img src="data:image/png;base64,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" alt="Laptop on Desk" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
           <div className="p-6">
               <h2 className="text-start font-bold text-xl md:text-3xl mb-2 text-orange-700">Status: {status}</h2>
               <div className='flex justify-between'>
                   <div>
                       <p className='text-start text-orange-700 mb-1'>Name: {customerName}</p>
                       <p className='text-start text-orange-700'>Email: {customerEmail}</p>
                   </div>
                   <div>
                       <p className='text-start text-orange-700 mb-1'>Amount: {amount} $</p>
                       <p className='text-start text-orange-700'>Payment: Stripe</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
   
      ) : (
        <p>Loading payment details...</p>
      )}

      

       

    </div>
  );
};

export default SuccessPage;