import React, { useContext, useEffect } from "react";
import { WishContext } from "../context/WishContext";

export default function Nav() {
   //consume the wish context value
   const [wishes, setWishes] =  useContext(WishContext);

   
    
  return (
    <nav>
      <div>Bucket List</div>
      <div>
        {wishes.length} wishes
      </div>
    </nav>
  );
}
