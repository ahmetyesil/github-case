import * as React from "react";
import { Header, Footer } from "@/Core/index";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";
import { useEffect } from "react";
import { useMutateApi } from "@/Hooks/index";
import { loginRedux, logoutRedux } from "@/Redux/actions";
import DashboardHeader from "@/Composite/DashboardHeader";

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
