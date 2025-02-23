import { StarIcon } from "@heroicons/react/24/outline";

export default function Rating({ stars }: { stars: number }) {
  return (
    <>
      {Array.from({ length: stars }).map((_, index) => (
        <StarIcon key={index} className="h-4 fill-green-600 stroke-green-600" />
      ))}
    </>
  );
}
