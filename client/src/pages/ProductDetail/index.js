import {useParams} from "react-router-dom"
import { useQuery } from "react-query";

function ProductDetail() {
    const {product_id} = useParams ();
  return (
    <div>Product Detail {product_id}</div>
  )
}

export default ProductDetail