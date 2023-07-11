import React from "react";

function Receipts(props) {
  return (
    <div className="Receipts">
      <h1>{props.orderInfo.person}</h1>
      <h2>{props.orderInfo.order.toy}</h2>
      <ul>
        {props.orderInfo.order.accessories.map((accessories) => {
          return <li>{accessories}</li>;
        })}
      </ul>
      <h2>${props.orderInfo.order.price}</h2>
    </div>
  );
}

export default Receipts;
