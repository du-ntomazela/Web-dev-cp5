import "../App.css"

function sobre () {
    return(
        <div className="flex-col text-center">
            <h1 id="conteudo-main" className="text-6xl text-white mb-8">Sobre</h1>
            <div className="flex justify-center mb-14">
            <img className="w-2/6" src="../../public/imgs/perfil.png" alt="Eduardo Tomazela" />
            </div>
            <h1 className="text-2xl text-white mb-20 font-black">Olá, me chamo Eduardo Tomazela do Nascimento, tenho 18 anos, atualmente cursando o segundo semstre do curso de Engenharia de Software na fauldade FIAP. Atualmente estou alocado no cargo de Sales Intern na multinacional FiberHome, trabalhando 100% presencial, e praticando diariamente minhas habilidades em vendas, desenvolvimento, comunicação e inglês</h1>
        </div>
    )
}

export default sobre