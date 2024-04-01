import * as React from "react";
import {CSSProperties} from "react";
import {GoStar, GoStarFill} from "react-icons/go";

export type IProps = {
  style?:CSSProperties;
};

// @ts-ignore
const Rating =  ({style }:IProps) => {
    return (
            <div className={`w-full flex items-center`} style={style}>
                <GoStarFill className="mr-1 text-dark-green text-base" />
                <GoStarFill className="mr-1 text-dark-green text-base" />
                <GoStarFill className="mr-1 text-dark-green text-base" />
                <GoStarFill className="mr-1 text-dark-green text-base" />
                 <GoStar   className="mr-1 text-dark-green text-base"  />
                <span className="text-base text-dark-green">(30)</span>
            </div>
    );
}
export default Rating;
