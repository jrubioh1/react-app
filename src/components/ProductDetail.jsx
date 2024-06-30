export const ProductDetail= ({product})=>{
    return (
        <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                </tr>
    )
}