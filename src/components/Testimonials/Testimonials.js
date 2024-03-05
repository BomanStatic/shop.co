import EmblaCarousel from "./Slider/EmblaCarousel";

const OPTIONS = { align: "start", loop: true };
const TESTIMONIALS = [
    {
        name: "Alex K.",
        rating: 5,
        message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    },
    {
        name: "John D.",
        rating: 4.5,
        message: `"The customer service at Shop.co is top-notch. They were quick to answer my questions and helped me find the perfect outfit for my event."`,
    },
    {
        name: "Sarah L.",
        rating: 4.7,
        message: `"I love the variety of styles at Shop.co. I can always find something that suits my taste and the prices are very reasonable."`,
    },
    {
        name: "Mike P.",
        rating: 4.2,
        message: `"The delivery from Shop.co was fast and the items were packaged nicely. I'm very satisfied with my purchase."`,
    },
    {
        name: "Emma S.",
        rating: 5,
        message: `"The quality of the clothes from Shop.co is amazing. The fabrics are comfortable and the designs are stylish. I'm definitely going to shop here again."`,
    },
];
export default function Testimonials() {
    return <EmblaCarousel slides={TESTIMONIALS} options={OPTIONS} />;
}
