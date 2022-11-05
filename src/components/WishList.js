import React, { useContext, useState } from "react";
import Wish from "./Wish";

export default function WishList() {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      title: "Wish 1",
    },
    {
      id: 2,
      title: "Wish 2",
    },
  ]);
  return (
    <>
      {wishes.map((wish) => {
        return <Wish key={wish.id} title={wish.title} id={wish.id} />;
      })}
    </>
  );
}
