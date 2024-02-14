import { SVGAttributes } from "react";

export function Arrow(props: SVGAttributes<SVGElement>) {
    return (
        <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    );
}
