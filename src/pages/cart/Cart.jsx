import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItems, updateCartItem } from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {items : products} = useSelector((state)=>state.cart)
    console.log(products,"herer")
    const totalItemsInCart = products.reduce((total,item)=>Number(item.quantity )+ Number(total) ,0)
    let tamount=0
    const totalAmountOfCart = products.map((amount,item)=>{
console.log(amount.quantity * amount.product?amount.product.productPrice:0 ,amount.product.productPrice*amount.quantity,"hhrhehre")
tamount+=Number(amount.product.productPrice)*Number(amount.quantity)
console.log(tamount)
      return tamount
    })
console.log(tamount,"here")
    
    const handleQuantityChange = (productId,product, newQuantity)=>{
      console.log(productId,'djshgdjsgh',"dsds",product)
      if(newQuantity<=product.productStockQty & newQuantity>=0){

        dispatch(updateCartItem(productId, newQuantity))
      }else{
        alert('sorry execded the stock')
      }
    }
    const handleDelete = (productId)=>{
      dispatch(deleteCartItems(productId))
    }

    return (
      <div className="min-h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-3xl font-semibold text-gray-800">Your Shopping Cart</h1>
      <div className="mx-auto max-w-5xl px-4 md:px-6 xl:px-0">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
          {/* Products Section */}
          <div className="w-full md:w-2/3">
            {products.map((product) => (
              <div
                key={product._id}
                className="mb-6 flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-lg shadow-md p-4 sm:p-6"
              >
                <img
                  src={product?.product?.productImage}
                  alt="product"
                  className="w-full sm:w-40 h-40 object-cover rounded-md"
                />
                <div className="flex flex-col sm:ml-6 w-full">
                  <div className="flex justify-between w-full">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{product?.product?.productName}</h2>
                      <p className="mt-2 text-lg font-medium text-gray-700">Rs. {product?.product?.productPrice}</p>
                    </div>
                    <div className="flex items-center sm:mt-0 mt-4 sm:space-x-4">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 text-lg hover:bg-blue-500 hover:text-white"
                        onClick={() =>
                          handleQuantityChange(product.product._id, product.product, product.quantity - 1)
                        }
                      >
                        -
                      </span>
                      <input
                        className="h-10 w-12 border bg-white text-center text-lg font-semibold outline-none"
                        type="number"
                        value={product.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(product.product._id, product.product, e.target.value)
                        }
                      />
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 text-lg hover:bg-blue-500 hover:text-white"
                        onClick={() =>
                          handleQuantityChange(product.product._id, product.product, product.quantity + 1)
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-end mt-4 sm:mt-2 text-red-500 cursor-pointer"
                    onClick={() => handleDelete(product.product._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 md:order-2 order-1">
            <div className="flex justify-between mb-4">
              <p className="text-gray-800 text-lg font-medium">Total Items</p>
              <p className="text-gray-800 text-lg font-medium">{totalItemsInCart}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-xl font-semibold text-gray-800">Total Price</p>
              <div>
                <p className="text-xl font-bold text-blue-600">Rs. {tamount}</p>
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-md bg-blue-500 py-2 text-lg font-medium text-white hover:bg-blue-600 transition-all"
              onClick={() => navigate('/checkout')}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart