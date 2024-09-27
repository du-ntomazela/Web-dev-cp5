import "../App.css"
import Logo from "./logo"
import Navegação from "./navbar"


function Header () {
    return (
        <>
        <div className="flex gap-8 justify-center">           
            <Logo />
            <Navegação />  
        </div>
        <section className="h-20"></section>
        </>
    )
}

export default Header