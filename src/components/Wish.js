import React, { useContext } from "react";
import { WishContext } from "../context/WishContext";

export default function Wish({ title, id }) {
  //consume the wish context value
  const [wishes, setWishes] =  useContext(WishContext);

    const removeWish = () => {
      let newWishes = wishes.filter((wish) => {
        return wish.id !== id;
      })
      setWishes(newWishes);
    }
    
  return (
    <div className="wish">
      <h3>{title}</h3>
      <button onClick={removeWish}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
    </div>
  );
}
