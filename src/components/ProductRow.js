import React from "react";

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;

    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    const price = product.stocked ? (
      product.price
    ) : (
      <span style={{ color: "red" }}>{product.price}</span>
    );

    return (
      <tr>
        <td className="name">{name}</td>
        <td className="price">{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
