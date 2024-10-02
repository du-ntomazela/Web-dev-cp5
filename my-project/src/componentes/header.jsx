import "../App.css"
import Logo from "./logo"
import Navegação from "./navbar"


function Header () {
    return (
        <>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center p-4">          
            <Logo />
            <Navegação />  
        </div>
        <section className="h-20"></section>
        </>
    )
}

export default Header