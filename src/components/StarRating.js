export default function StarRating({ rating, showCount = true }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.3 ? 1 : 0;
    return (
        <div className="flex gap-1 items-center">
            {[...Array(fullStars)].map((_, i) => (
                <span key={i} className="text-yellow-400 icon-[carbon--star-filled]"></span>
            ))}
            {halfStar ? <span className="text-yellow-400 icon-[carbon--star-half]"></span> : ""}
            {showCount && (
                <p className="text-sm">
                    {rating}/<span className="text-gray-500">5</span>
                </p>
            )}
        </div>
    );
}
