
import React, { useEffect , useState , useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../../../../../store/productSlice'
import { addToCart } from '../../../../../store/cartSlice'
import { useNavigate  } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Star from "./Star.jsx"
const SingleProduct = ({id:productId}) => {
  // console.log("id " , productId)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [rating_state , setRating] = useState(0)
    const [r , setR] = useState(2)
    const [category , setCategory] = useState("")
    const [recommend , setRecommended] = useState([])

    let recommend_ref = useRef(null)

    const set_recommended_lists = (recommended_lists) => {
      console.log("recommended products as length " , recommended_lists.length)

      // for(let i = 0; i < recommended_lists.length; i++){
      //   const new_product = [...recommend , recommended_lists[i]]
      //   setRecommended(new_product) 
      // }

      recommended_lists.forEach((product) => {
        
        setRecommended((prev) => [...prev , product]) 
      })
    }
  
   const {selectedProduct,status} = useSelector((state)=>state.product)
   const product = selectedProduct?.product && selectedProduct?.product[0]
    const reviews = selectedProduct.productReviews
    const review = reviews?.length
    console.log("new State " , review)
   
    const {data : user} = useSelector((state)=>state.auth)

    const update_product_rating = async (rating_obj ) => {
      console.log("the cateogry is " , category)
      const token = localStorage.getItem("token")
      const response = await fetch(`http://localhost:3000/api/create_rating/${productId}`,
      {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
          Accept : 'application/json',
          'Authorization' : `${token}`
      },
      body : JSON.stringify(rating_obj)
      }
)
const data = await response.json()
console.log(data)
setRating(data.rating)
}
   
const get_rating = async () => {
  const token = localStorage.getItem("token")
  const rating = await fetch("http://localhost:3000/api/rating" , {
    method : "GET",
    headers : {
      'Content-Type' : 'application/json',
      Accept : 'application/json',
      'Authorization' : `${token}`
  }
  })

  const rating_res = await rating.json()
  console.log("the rating list is as " , rating_res)
}

const fetc_product_rating = async (id) => {
  const token = localStorage.getItem("token")
  const response = await fetch(`http://localhost:3000/api/get_rating/${id}`,
  {
    method : "GET",
    headers : {
      'Content-Type' : 'application/json',
      Accept : 'application/json',
      'Authorization' : `${token}`
  }
  }
)
const data = await response.json()
console.log(data)
setRating(data.rating)  
// set_recommended_lists(data.similar_products)
console.log("similar products list length is " , data.similar_products.length)
recommend_ref.current = data.similar_products
}



    useEffect(()=>{
      dispatch(fetchProductDetail(productId))
      const update_rating = (new_rating)=>{
        setRating(new_rating)
      }
      update_rating(review)
      get_rating()
      if(review != rating_state){
        console.log("not equal")
        update_rating(review)
      }

      fetc_product_rating(productId)
      // fetch_rating()
  

      const handleVisibilityChange = () => {
        if (!document.hidden) {
          fetc_product_rating(productId)
        }
      };





      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };

  },[review , category])

    const handleCart = ()=>{
      if(user.length == 0 && (localStorage.getItem('token') == '' || localStorage.getItem('token') == null || localStorage.getItem('token') == undefined )){
        return navigate('/login')
      }
      dispatch(addToCart(productId))
    }



    const rate_function = (e, rate) => {
      if(!localStorage.getItem('token')){
        alert("cannot rate")
      }else{

        console.log(e.target)
      }
    }

const rating_state_function = () => {
  // alert("r")
  setRating(4)
}

const change_rating = (rating , cat) => {
  setRating(rating)
  console.log("cate" , cat)
  const obj = {
    rate : rating,
    category : cat
  }
  update_product_rating(obj)
}

   const navigate_to = (id) => {
    // alert("arer")
    navigate(`/productDetail/${id}`)
    fetc_product_rating(id)
    window.location.reload()
   }

  return (
    <div>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product?.productImage}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product?.productCategory}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.productName}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Star rate={rating_state} change_rating={change_rating} cat={product?.productCategory} />
                <span className="text-gray-600 ml-3">{rating_state}</span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.productDescription}</p>
            <p className="leading-relaxed"><span className="font-bold">Status</span>: {product?.productStatus}</p>
            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-200">
              <p className="leading-relaxed"><span className="font-bold">Stock Left</span>: {product?.productStockQty}</p>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">NPR {product?.productPrice}</span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container px-5 py-10 mx-auto">
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-6">Recommended For You</h1>
      <div className="flex flex-wrap justify-center">
        {recommend_ref.current && recommend_ref.current.map((product) => (
          <div
            onClick={() => navigate_to(product?._id)}
            key={product?._id}
            className="mx-4 mt-6 w-72 transform overflow-hidden rounded-lg bg-white shadow-lg duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img className="h-48 w-full object-cover object-center" src={product?.productImage} alt="Product Image" />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium text-gray-900">{product?.productName}</h2>
              <p className="mb-2 text-base text-gray-700">{product?.productDescription}</p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900">Rs.{product?.productPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


  )
}

export default SingleProduct