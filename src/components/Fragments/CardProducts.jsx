import Button from "../Elements/Buton";
import handleAddToCart from "../Fragments/CardProducts";


const CardProduct = (props) => {

    const {
        children
    } = props;

    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { img } = props;

    return (
        <a href="">
            <img 
                src={img} 
                alt="shoes-sneakers" 
                className="p-8 rounded-t-lg" 
            />
        </a>
    )
}

const BodyCard = (props) => {
    const { children, title } = props;

    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
            </a>
            <p className="text-m text-white">
                {children}
            </p>
        </div>
    )
}

const FooterCard = (props) => {
    const { price, handleAddToCart, id } = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
                {price.toLocaleString('id-ID', 
                    { style: 'currency', currency: 'IDR' }
                )}
            </span>
            
            <Button 
                classname="bg-blue-600"
                onClick={() => handleAddToCart(id)}>
                    Add To Card
            </Button>
        </div>
    )
}

CardProduct.Header = HeaderCard;
CardProduct.Body = BodyCard;
CardProduct.Footer = FooterCard;

export default CardProduct