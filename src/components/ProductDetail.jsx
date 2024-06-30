import {PropTypes} from "prop-types"

export const ProductDetail= ({product, handlerRemove, handlerSelected})=>{
    return (
        <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><button  className=" btn btn-secondary  btn-sm" onClick={()=>{handlerSelected(product)}}>Update</button></td>
                    <td><button className=" btn btn-danger  btn-sm" onClick={()=>{handlerRemove(product.id)}}>Remove</button></td>
                </tr>
    )
}
ProductDetail.propTypes={
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSelected: PropTypes.func.isRequired
}