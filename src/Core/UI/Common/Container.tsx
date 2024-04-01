import * as React from "react";

export type IProps = {
  children: React.ReactNode | JSX.Element | null | boolean;
  size?:string;
};

// @ts-ignore
const Container =  ({ size,children }:IProps) => {
    return (
            <div className={`m-auto max-w-[1400px]`} style={{maxWidth:size&&size}}>
                {children}
            </div>
    );
}
export default Container;
