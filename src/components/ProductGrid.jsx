import { ProductDetail } from "./ProductDetail"
import {PropTypes} from "prop-types"

export const ProductGrid= ({products , handlerRemove, handlerSelected})=>{
    return (
        <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th>name</th>
                <th>description</th>
                <th>price</th>
                <th>update</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {products.map( product => {
                return (
                <ProductDetail product={product}  handlerRemove={handlerRemove} handlerSelected= {handlerSelected} key={product.name}/>
                )
            })}
            
        </tbody>
    </table>
       
    )
}

ProductGrid.propTypes={
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSelected: PropTypes.func.isRequired
}