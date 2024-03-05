"use client";
import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button className="embla__button embla__button--prev" type="button" {...restProps}>
            <span className="text-4xl icon-[carbon--arrow-left]"></span>
            {children}
        </button>
    );
};

export const NextButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <button className="embla__button embla__button--next" type="button" {...restProps}>
            <span className="text-4xl icon-[carbon--arrow-right]"></span>
            {children}
        </button>
    );
};
