import { useState } from "react";
import Button from "./Button";
import useStore from "./Store";
import sample from "../assets/company4.svg";

const Card = ({ item }) => {
  const { AddCart } = useStore((state) => ({
    AddCart: state.AddCart,
  }));

  const [imageUrl, setImageUrl] = useState(item.images[0] || sample);

  const handleImageError = () => {
    setImageUrl(sample);
  };

  return (
    <div className="border rounded-xl p-3 hover:border duration-700">
      <div className="w-64 h-64">
        <img
          src={imageUrl}
          alt=""
          className="rounded-md"
          onError={handleImageError}
        />
      </div>
      <Button
        text="Add to Cart"
        position={"justify-end mx-3"}
        className={"bg-black duration-700"}
        onClick={() => AddCart(item)}
      />
    </div>
  );
};

export default Card;
