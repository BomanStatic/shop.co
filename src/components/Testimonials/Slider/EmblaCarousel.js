"use client";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../TestimonialCard";
import "./Slider.css";

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla max-w-6xl my-12 mx-auto">
            <div className="embla__controls py-6">
                <h2 className="uppercase text-5xl font-integral">Our happy customers</h2>
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <TestimonialCard name={slide.name} rating={slide.rating} message={slide.message} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
