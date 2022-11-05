import React, { useContext, useState } from "react";
import Wish from "./Wish";
import { WishContext } from "../context/WishContext";

export default function WishList() {
//consume the wish context value
const [wishes, setWishes] =  useContext(WishContext);

  return (
    <>
      {wishes.map((wish) => {
        return <Wish key={wish.id} title={wish.title} id={wish.id} />;
      })}
    </>
  );
}
