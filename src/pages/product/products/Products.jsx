import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchProducts } from '../../../store/productSlice'
import { useNavigate } from 'react-router-dom'
import videos from '../../../assets/iphone16.mp4'
const Products = () => {
    // const[products,setProducts] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {data,status} = useSelector((state)=>state.product)

    let {products} = data
    console.log(data)
     useEffect(()=>{
      dispatch(fetchProducts())
      
     },[dispatch])
     
    // const {data : products,status} = useSelector((state)=>state.product)
    
    //  useEffect(()=>{
    //      dispatch(fetchProducts())
    //  },[])

    // const addToCart = (product)=>{
    //   dispatch(add(product))
    // }

    if(status == 'loading'){
      return <h1>Loading...</h1>
    }
    if(status == 'error'){
      return <h1>Error ! Something went wrong </h1>
    }


  return (
    <div className="relative w-full flex pb-20 flex-col gap-20 ">
      <div className='h-[600px]  w-full'>
<video className='h-full w-full object-cover' autoPlay muted loop={true}>
  <source src={videos} />
</video>
      </div>
     
    <div className="relative bg-white-50">
        <div className="container m-auto px-6 md:px-12  lg:px-7">
        {/* <h1 className="text-2xl font-bold text-yellow-900 md:text-3xl lg:w-10/12">Our Popular Foods</h1> */}

      <div className="grid grid-cols-3 gap-10 ">
      
        
{
  //products.map((product)=>
    data && data.map((product) => {
      // Assuming a 20% discount on the product price
      const discount = 0.20;
      const actualPrice = product.productPrice;
      const discountedPrice = (actualPrice - (actualPrice * discount)).toFixed(2); // Calculating the discounted price
      
      return (
        <div 
          onClick={() => navigate(`/productDetail/${product._id}`)} 
          key={product._id} 
          className="mx-auto w-full transform overflow-hidden cursor-pointer group  rounded-md  shadow-md duration-300 hover:scale-105 hover:shadow-lg"
        >
        <div className='h-72 overflow-clip'>
        <img 
            className="h-72 overflow-clip w-full object-contain group-hover:scale-125 group-hover:rotate-6 transition-all ease-in-out delay-75 duration-700 object-center" 
            src={product && product.approved ? product.productImage.split("http://localhost:3000/")[1] : product.productImage} 
            alt="Product Image" 
          />
        </div>
          <div className="p-4 flex flex-col gap-2">
            <h2 className=" text-xl font-semibold  text-gray-900">{product.productName}</h2>
            <p className=" text-base  text-gray-700">{product.productDescription}</p>
            <div className="flex py-3 border-t border-gray-500 justify-between items-center">
              {/* Discounted Price */}
              <p className="mr-2 text-lg font-semibold text-gray-900 ">Rs. {discountedPrice} </p>
    
              {/* Original Price with line-through */}
              <p className="text-base font-medium text-gray-400 line-through ">
                Rs. {actualPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )
    })
    
}
   
</div>
         </div>
     </div>
 </div>
  )
}

export default Products