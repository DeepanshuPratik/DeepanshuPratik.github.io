import {IoLogoIonic} from "react-icons/io";
const Icon = ({text}) => {
    return (
        <div className="flex text-white text-3xl">
            <IoLogoIonic className="px-1 animate-spin" />
            <span className="hidden md:grid place-content-center bold text-lg ">
                {text || "Deepanshu's Portfolio"}
            </span>
        </div>
    );
};

export default Icon;
