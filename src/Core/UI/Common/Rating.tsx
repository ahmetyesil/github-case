import * as React from "react";
import { Header, Footer } from "@/Core/index";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";
import {CSSProperties, useEffect} from "react";
import { useMutateApi } from "@/Hooks/index";
import { loginRedux, logoutRedux } from "@/Redux/actions";
import DashboardHeader from "@/Composite/DashboardHeader";
import {MdOutlineStar, MdOutlineStarBorder} from "react-icons/md";
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
