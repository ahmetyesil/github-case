import * as React from "react";
import {ImSpinner10} from "react-icons/im";
const Loading =  () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin-slow">
                <ImSpinner10 className="text-3xl text-gray-600" />
            </div>
        </div>
    );
}
export default Loading;
