import Image from "next/image";
import StarRatingReadOnly from "../StarRatingReadOnly";
import SelectColorButton from "./SelectColorButton";

const AddToCartCard = () => {
  return (
    <div className="bg-white rounded-2xl py-4 px-3 max-w-[350px]">
      <p className="text-center text-xs mb-4">TRENDING</p>
      <h3 className="text-center font-medium text-2xl mb-4">BLACK TITANIUM</h3>
      <p className="text-center text-sm mb-4">black solid titanium</p>
      <Image src="https://i.ibb.co/HBXs7W2/zmt-KTo-Lo-S-0-RBR0101-S.jpg" className="mx-auto" width={400} height={400} alt="sunglasses" />
      <StarRatingReadOnly rating={3.5} size={15} totalStars={5} color="#00a76b" className="mx-auto  w-min mb-[14px]" />
      <h5 className="text-center font-semibold text-lg">
        796.00 <span className="font-medium text-sm mb-[14px]">BDT</span>
      </h5>
      <SelectColorButton />
      <div className="flex justify-center">
        <button className="bg-[#00a76b] text-white px-6 py-2 rounded-lg">ADD TO CART</button>
      </div>
    </div>
  );
};

export default AddToCartCard;
