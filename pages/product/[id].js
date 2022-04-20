import react from "react";
import { useRouter } from 'next/router'

const ProductItem = () => {
    //const router = useRouter()  // {router.query.id}
    const{
        query: {id},
    } = useRouter();

    return(
        <div>
            <p>Esta es la pagina de Producto: {id} </p>
        </div>
    )
}

export default ProductItem;