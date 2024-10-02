import "../App.css"
import Icons from "../componentes/icons"


function sobre () {
    return(
        <div className="flex flex-col text-center p-5">
            <h1 id="conteudo-main" className="text-4xl md:text-6xl text-white mb-8">Sobre</h1>   
            <div id="main-sobre" className="flex flex-col md:flex-row justify-center mb-14">
                <img className="w-3/4 md:w-2/6 mb-4 md:mb-0 rounded-full" src="../../public/imgs/perfil.png" alt="Eduardo Tomazela" />         
                <h1 className="text-base md:text-2xl text-white font-black md:ml-6">Olá, me chamo Eduardo Tomazela do Nascimento, tenho 18 anos, atualmente cursando o segundo semestre do curso de Engenharia de Software na faculdade FIAP. Atualmente estou alocado no cargo de Sales Intern na multinacional FiberHome, trabalhando 100% presencial, e praticando diariamente minhas habilidades em vendas, desenvolvimento, comunicação e inglês.</h1>
            </div>
            <Icons />
        </div>
    )
}

export default sobre