import Button from "../Elements/Buton";
import handleAddToCart from "../Fragments/CardProducts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartSlice";


const CardProduct = (props) => {

    const {
        children,
    } = props;

    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { img, id } = props;

    return (
        <Link to={`/product/${id}`}>
            <img 
                src={img} 
                alt="shoes-sneakers" 
                className="p-8 rounded-t-lg h-60 w-full object-cover object-center" 
            />
        </Link>
    )
}

const BodyCard = (props) => {
    const { children, title } = props;

    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title.substring(0, 20)}...
                    </h5>
            </a>
            <p className="text-m text-white">
                {children.substring(0, 150)}...
            </p>
        </div>
    )
}

const FooterCard = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                {price.toLocaleString('en-US', 
                    { style: 'currency', currency: 'USD' }
                )}
            </span>
            
            <Button 
                classname="bg-blue-600"
                onClick={() => dispatch(addToCart(
                        { id, qty: 1 }
                    ))}>
                    Add To Card
            </Button>
        </div>
    )
}

CardProduct.Header = HeaderCard;
CardProduct.Body = BodyCard;
CardProduct.Footer = FooterCard;

export default CardProduct