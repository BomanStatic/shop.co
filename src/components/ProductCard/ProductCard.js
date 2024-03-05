import StarRating from "../StarRating";
import Link from "next/link";
export default function ProductCard({ name, img, price, rating, discount }) {
    return (
        <Link href="/" className="grid gap-1">
            <img className="rounded-3xl aspect-square" width={400} height={150} src={img} alt={name} />
            <h3 className="text-xl font-bold">{name}</h3>
            <StarRating rating={rating} />
            <div className="flex gap-1">
                {discount > 0 ? (
                    <>
                        <p className="text-2xl font-bold">${price - discount}</p>
                        <p className="text-sm text-gray-500 line-through">${price}</p>
                    </>
                ) : (
                    <p className="text-2xl font-bold">${price}</p>
                )}
            </div>
        </Link>
    );
}
