import "../App.css"

function conteudo () {
    return(
        <>
        <div className="flex justify-center">
            <div className="flex-col w-1/2">
                <div id="conteudo-main" className="text-5xl mb-8">Olá me chamo<h1 className="text-emerald-600">Eduardo Tomazela,</h1> sou um engenheiro de software!</div>
                <p className="text-white mb-7">Atualmente estou cursando o segundo semestre do curso de engenharia de software na Faculdade de Informática e Administração Paulista (Fiap). Capaz de desenvolver soluções em Python, JavaScript, C++, HTML5 e CSS3, com conhecimento nas bibliotecas: BotCity, React, Bootstrap, Tailwind, entre outras...</p>
                <a href="../../public/pdfs/Curriculo-5.pdf" download="Currículo">
                    <button id="button" className="text-white border-blue-950">Download CV</button>
                </a>
            </div>
            <div className="w-1/2">
            <img className="" src="../../public/imgs/desenvolvedor.png" alt="" />
            </div>
            </div>
        </>
    )
}

export default conteudo