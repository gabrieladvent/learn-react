import CardProduct from "../components/Fragments/CardProducts";

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header img="/images/shoes-sneakers.jpg"/>

                <CardProduct.Body title="Sneakers">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis laborum blanditiis quaerat neque, tempora esse accusantium dicta mollitia placeat a debitis et sequi illo quae adipisci pariatur in accusamus sint.
                </CardProduct.Body>

                <CardProduct.Footer price="Rp. 100.000.000"/>
            </CardProduct>
        </div>
    );
}

export default ProductPage