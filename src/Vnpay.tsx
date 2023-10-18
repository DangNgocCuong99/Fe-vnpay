import React, { useState } from 'react';
import Render from './render'

const VNPayPayment = () => {
  const [amount, setAmount] = useState(0); // Số tiền thanh toán
  const handlePayment = async () => {
    try {
      // Gửi yêu cầu thanh toán đến server Node.js
    //   const response = await fetch('http://localhost:3000/', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    
    //   });

    //   const data = await response.json();

      // Khi nhận được dữ liệu từ server, chuyển hướng người dùng đến trang thanh toán VNPay
      window.location.href = "https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html?token=498622783b5e4976b1f4ac22465b4fe3";
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAmountChange = (event:any) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h2>VNPay Payment</h2>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={handlePayment}>Pay with VNPay</button>
    </div>
  );
};

export default VNPayPayment;