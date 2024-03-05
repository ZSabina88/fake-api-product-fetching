import classes from "./ProductItem.module.css";
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function ProductItem() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const navigation = useNavigation();
    const { id } = useParams();


    const isSubmitting = navigation.state === "submitting";

    function cancelHandler() {
        navigate('/products');
    }

    useEffect(()=>{
        async function productFetch() {
          const response = await fetch('https://fakestoreapi.com/products');
          const products = await response.json();
          const productId = products.find((item)=> String(item.id) === id)
          setProduct(productId);
        }
        productFetch();
      }, [])

    return (
        <article className={classes.product}>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <menu className={classes.actions}>
                <button type='button' onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Add to cart"}
                </button>
            </menu>
        </article>
    );
}
