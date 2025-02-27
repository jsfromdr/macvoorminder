import Image from "next/image";
import ProductProps from "@/lib/interfaces";
import Rating from "./Rating";

const ProductListing: React.FC<ProductProps> = ({
  productImage,
  productTitle,
  price,
  discount,
  discountedPrice,
  cpu,
  gpu,
  modelYear,
  color,
}) => {
  return (
    <article className="mb-0 cursor-pointer transition-all duration-300 hover:translate-y-[-10px]">
      <div className="relative">
        <Image
          src={productImage}
          alt={`Image of ${productTitle}`}
          className="mb-4 h-48 w-full object-contain"
          width={300}
          height={300}
        />
        {/* Reuse the discount type from ProductProps */}
        <Discount discount={discount} />
      </div>
      <div className="flex flex-col gap-4">
        <a className="text-xl font-bold text-slate-900">{productTitle}</a>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Rating stars={5} />
          </div>
          <ul className="space-y-1">
            <li className="flex items-center gap-1">
              <span className="text-sm text-slate-500">CPU:</span>
              <span className="text-sm text-slate-700">{cpu}</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-sm text-slate-500">GPU:</span>
              <span className="text-sm text-slate-700">{gpu}</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-sm text-slate-500">Modeljaar:</span>
              <span className="text-sm text-slate-700">{modelYear}</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-sm text-slate-500">Kleur:</span>
              <span className="text-sm text-slate-700">{color}</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-500 line-through">{price}</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-slate-900">
                {discountedPrice}
              </span>
              <span className="text-xs text-slate-500">incl. btw</span>
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-900">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

const Discount: React.FC<Pick<ProductProps, "discount">> = ({ discount }) => {
  return (
    <span className="absolute -top-5 right-0 flex size-12 items-center justify-center rounded-full bg-green-600 text-sm font-medium text-white">
      {discount}%
    </span>
  );
};

export default ProductListing;
