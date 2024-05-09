import React  from "react";
import ItemsPart from "./itemsPart";
import TotalPrice from "./totalClc";


export default function CartPage () {

    return <div style={{height: "100%",display:"flex", overflow:"hidden"}} >
        <ItemsPart />
        <TotalPrice />
  </div>
}