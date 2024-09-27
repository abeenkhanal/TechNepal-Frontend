import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'
import { createOrder } from '../../store/checkoutSlice'
import { STATUSES } from '../../globals/components/misc/statuses'
import { APIAuthenticated } from '../../http'
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {items : products} = useSelector((state)=>state.cart)
    const {register, handleSubmit,formState} = useForm()
    const {status,data} = useSelector((state)=>state.checkout)
    const [paymentMethod, setPaymentMethod] = useState("COD")
    const subTotal = products.reduce((amount,item)=>item.quantity * item.product.productPrice + amount,0)
    const shippingAmount = 100
    const totalAmount = subTotal + shippingAmount

    const handleOrder = (data)=>{
      const orderDetails = {
        shippingAddress : data.shippingAddress,
        totalAmount : totalAmount,
        items : products,
        paymentDetails : {
          method : paymentMethod
        },
        phoneNumber : data.phoneNumber
      }
      dispatch(createOrder(orderDetails))
    }

    const proceedForKhaltiPayment = ()=>{
      const currentOrder = data[data.length -1]
      if(status === STATUSES.SUCCESS && paymentMethod === "COD" ){
          // navigate('/')
          return alert("Order placed successfully")
          
       }  
      if(status === STATUSES.SUCCESS && paymentMethod === "Khalti" ){
          const {totalAmount,_id:orderId} = data[data.length -1]
          
         handleKhalti(orderId,totalAmount)
      }
  
     }
  
     useEffect(()=>{
      proceedForKhaltiPayment()
     },[status,data])

     const handlePaymentChange = (e)=>{
      setPaymentMethod(e.target.value)
    }

     const handleKhalti = async (orderId,totalAmount)=>{
      try {
        const response = await APIAuthenticated.post('/payment',{orderId,amount:totalAmount})
        console.log(response)
        if(response.status === 200){
           window.location.href = response.data.paymentUrl
        }
  
      } catch (error) {
        console.log(error)
      }
     }

  return (
    <>
        <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-3 text-xs sm:mt-0 sm:ml-auto sm:text-base"></div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 gap-8">
        <div className="px-4 pt-8">
          <p className="text-2xl font-semibold text-gray-800">Order Summary</p>
          <p className="text-gray-500">Review your items and select a payment method.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-4 py-6 sm:px-6 shadow-lg">
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <div
                    key={product.product._id}
                    className="flex flex-col rounded-lg bg-white sm:flex-row shadow-md p-4"
                  >
                    <img
                      className="m-2 h-28 w-28 rounded-md border object-cover object-center"
                      src={product.product.productImage}
                      alt=""
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold text-lg">{product.product.productName}</span>
                      <span className="text-sm text-gray-400">Qty: {product.quantity}</span>
                      <p className="mt-2 text-lg font-bold text-blue-600">Rs. {product.product.productPrice}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          <p className="mt-8 text-xl font-semibold text-gray-800">Payment Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={handlePaymentChange}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 transform -translate-y-1/2 box-content block h-3 w-3 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 shadow-md"
                htmlFor="radio_1"
              >
                <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                <div className="ml-5">
                  <span className="font-semibold text-lg">Cash On Delivery</span>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                value="Khalti"
                onChange={handlePaymentChange}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 transform -translate-y-1/2 box-content block h-3 w-3 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 shadow-md"
                htmlFor="radio_2"
              >
                <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                <div className="ml-5">
                  <span className="font-semibold text-lg">Online (Khalti)</span>
                </div>
              </label>
            </div>
          </form>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            handleOrder(data);
          })}
          noValidate
        >
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 rounded-lg shadow-lg">
            <p className="text-2xl font-semibold text-gray-800">Payment Details</p>
            <p className="text-gray-500">Complete your order by providing your payment details.</p>
            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                  {...register('email', { required: 'Email is required' })}
                />
                <p className="text-red-500 text-sm">{formState.errors.email && formState.errors.email.message}</p>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative mt-1">
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone Number"
                  {...register('phoneNumber', { required: 'Phone Number is required' })}
                />
                <p className="text-red-500 text-sm">{formState.errors.phoneNumber && formState.errors.phoneNumber.message}</p>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="shippingAddress" className="block text-sm font-medium text-gray-700">
                Shipping Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="shippingAddress"
                  name="shippingAddress"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Shipping Address"
                  {...register('shippingAddress', { required: 'Shipping Address is required' })}
                />
                <p className="text-red-500 text-sm">{formState.errors.shippingAddress && formState.errors.shippingAddress.message}</p>
              </div>
            </div>
            <div className="mt-10">
              <button
                className="w-full rounded-md bg-blue-500 px-6 py-3 font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default Checkout