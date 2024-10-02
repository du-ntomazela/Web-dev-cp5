import "../App.css"
import {Link} from "react-router-dom"

function navegação () {
    return(
        <>
        <div className="w-full md:w-4/5 h-auto flex shadow-md shadow-black justify-center bg-slate-800 rounded-md mt-4 md:mt-0">
        <div className="flex flex-row md:flex-row gap-4 md:gap-8 items-center p-4">
            <Link id="nav-home" to="/" className="text-white hover:text-yellow-400">Home</Link>
            <Link id="nav" to="/sobre" className="text-white hover:text-yellow-400">Sobre</Link>
            <Link id="nav" to="/projetos" className="text-white hover:text-yellow-400">Projetos</Link>
            <Link id="nav" to="/contato" className="text-white hover:text-yellow-400">Contato</Link>
        </div>
    </div>
        </>
    )
}

export default navegação