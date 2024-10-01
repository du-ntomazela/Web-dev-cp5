import "../App.css"
import { FaHtml5 } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import { SiSap } from "react-icons/si";

function icons (){
    return (
        <>        
        <h1 id="conteudo-main" className="text-6xl text-white mb-14">Experiências</h1>
        <div className="flex justify-center mb-14 gap-8">
            <IconContext.Provider value={{ color: "red",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <FaHtml5 />
                </div>
            </IconContext.Provider>;
            <IconContext.Provider value={{ color: "blue",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <IoLogoCss3 />
                </div>
            </IconContext.Provider>;
            <IconContext.Provider value={{ color: "yellow",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <FaJs />
                </div>
            </IconContext.Provider>;
            <IconContext.Provider value={{ color: "cyan",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <FaReact />
                </div>
            </IconContext.Provider>;
            <IconContext.Provider value={{ color: "blue",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <FaPython />
                </div>
            </IconContext.Provider>;
            <IconContext.Provider value={{ color: "cyan",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <FaSalesforce />
                </div>
            </IconContext.Provider>;
            <IconContext.Provider value={{ color: "cyan",size: "8em" , className: "global-class-name" }}>
                <div id="icon-xp">
                    <SiSap />
                </div>
            </IconContext.Provider>;
            </div>
            </>

    )
}

export default icons