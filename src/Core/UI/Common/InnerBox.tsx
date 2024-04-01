import * as React from "react";
import {CSSProperties} from "react";


export type IProps = {
  children: React.ReactNode | JSX.Element | null | boolean;
  style?:CSSProperties;
};

// @ts-ignore
const InnerBox =  ({style,children }:IProps) => {
    return (
            <div className={`w-full  shadow-[10px_10px_30px_rgba(0,0,0,0.09)] p-[25px] min-h-[210px] rounded-xl`} style={style}>
                {children}
            </div>
    );
}
export default InnerBox;
