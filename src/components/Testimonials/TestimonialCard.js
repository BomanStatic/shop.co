import StarRating from "../StarRating";
export default function TestimonialCard({ name, rating, message }) {
    return (
        <article className="border grid content-start gap-2 rounded-xl py-5 px-6 min-h-56">
            <StarRating rating={rating} showCount={false} />
            <h4 className="text-xl font-bold flex gap-2 items-center">
                {name}
                <div className="bg-green-500 p-[2px] rounded-full grid place-content-center">
                    <span className=" text-white icon-[carbon--checkmark]"></span>
                </div>
            </h4>
            <p className="text-black/60">{message}</p>
        </article>
    );
}
