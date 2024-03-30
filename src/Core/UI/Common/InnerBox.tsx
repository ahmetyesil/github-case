import * as React from "react";
import { Header, Footer } from "@/Core/index";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";
import {CSSProperties, useEffect} from "react";
import { useMutateApi } from "@/Hooks/index";
import { loginRedux, logoutRedux } from "@/Redux/actions";
import DashboardHeader from "@/Composite/DashboardHeader";

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
