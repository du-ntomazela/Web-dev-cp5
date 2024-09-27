import "../App.css"
import {Link} from "react-router-dom"

function navegação () {
    return(
        <>
        <div className="w-4/5 h-auto flex  shadow-md shadow-black justify-center bg-slate-800 rounded-md">
        <div className="mt-3 flex gap-8">
            <Link id="nav-home" to="/">Home</Link>
            <Link id="nav" to="/sobre">Sobre</Link>
            <Link id="nav" to="/projetos">Projetos</Link>
            <Link id="nav" to="/contato">Contato</Link>
            </div>
        </div>
        </>
    )
}

export default navegação