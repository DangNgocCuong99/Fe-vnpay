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
      window.location.href = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=1000000&vnp_Command=pay&vnp_CreateDate=20231018112731&vnp_CurrCode=VND&vnp_IpAddr=%3A%3A1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+cho+ma+GD%3A18112731&vnp_OrderType=other&vnp_ReturnUrl=http%3A%2F%2Flocalhost%3A8888%2Forder%2Fvnpay_return&vnp_TmnCode=3LL1IASJ&vnp_TxnRef=18112731&vnp_Version=2.1.0&vnp_SecureHash=49ace7905a8cbbbcc6ac7f58d39254717ece4d3fcfbe43dd0f338099910f9170ea6740dd1352609d74e215b9983ca73147fcbdbf1c09049ee27647c8820fe411";
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