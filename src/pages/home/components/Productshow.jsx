import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { add, remove } from "../../../store/cartSlice";
import Marquee from "react-fast-marquee";

const Card = ({ id, imageSrc, title, rating, price, addToCart }) => {
  const renderStars = () => {
    const starArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      starArray.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    const remainingStars = 5 - starArray.length;

    for (let i = 0; i < remainingStars; i++) {
      starArray.push(<FaStar key={`empty-${i}`} className="text-gray-400" />);
    }

    return starArray;
  };

  const dispatch = useDispatch()

  const addToCartt = ({ id, title, price }) => {
    dispatch(add({id,title, price, imageSrc }))
  }
  const navigate = useNavigate()
  return (
    <div className="mb-4 px-2 pb-4 w-72">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-32 object-cover" style={{ maxHeight: "150px" }} />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2">{renderStars()}</div>
          <p className="text-xs text-gray-400 mt-2 mb-0.5"></p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-gray-700">Rs.{price}</p>
            <button
              onClick={()=>navigate('/product')}
              //onClick={() => addToCartt({ id, title, price, imageSrc })}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Buy Now 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductContainer = () => {
  const addToCart = (product) => {
    // Implement your addToCart logic here, e.g., update a shopping cart state
    console.log("Added to cart:", product);
  };


  const products = [
    {
      id: 1,
      imageSrc:
        "https://i.pinimg.com/564x/25/2e/f1/252ef1d94faa11bd302e7db19f20aee7.jpg",
      title: "Triber Renault",
      rating: 4.5,
      price: 3000000,
    },
    {
      id: 2,
      imageSrc:
        "https://i.pinimg.com/564x/49/35/69/493569c4f195251b516d0db83e8cdb5f.jpg",
      title: "Yamaha YZF-R6",
      rating: 3.8,
      price: 400000,
    },
    {
      id: 3,
      imageSrc:
        "https://i.pinimg.com/564x/e0/eb/a1/e0eba1488abaa6613641d16c871e1829.jpg",
      title: "Canon PowerShot G7X",
      rating: 4.2,
      price: 50000,
    },
    {
      id: 4,
      imageSrc:
        "https://i.pinimg.com/564x/3e/87/b7/3e87b75b2a6812b0fff4b4e5cc0ea320.jpg",
      title: "DJI Mavic Mini",
      rating: 4.9,
      price: 200000,
    },
    {
      id: 5,
      imageSrc:
        "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Gaming PC",
      rating: 4.9,
      price: 300000,
    },
    {
      id: 6,
      imageSrc:
        "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Macbook Air",
      rating: 4.6,
      price: 160000,
    },
    
  ];
  

  return (
    <div className=" mt-16 w-11/12  pb-10 py-20 mx-auto ">
      <div className="">
        <div className="text-center text-blue-700 pb-8">
          <h1 className="font-extrabold text-2xl ">Special Product</h1>
        </div>
       <Marquee autoFill={true} direction="right" loop={0} delay={1} speed={45} className="flex">

        {products.map((product) => (
          <Card key={product.id} {...product} addToCart={addToCart} />
        ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ProductContainer;
