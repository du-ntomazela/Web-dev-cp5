import "../App.css"

function conteudo () {
    return(
        <>
        <div className="flex flex-col md:flex-row justify-center p-5">
            <div className="flex-col w-full md:w-1/2 mb-6 md:mb-0">
                <div id="conteudo-main" className="text-4xl md:text-5xl mb-4">Olá, me chamo <span className="text-emerald-600">Eduardo Tomazela,</span> sou um engenheiro de software!
                </div>
                <p className="text-white mb-5 text-base md:text-lg">
                Atualmente estou cursando o segundo semestre do curso de Engenharia de Software na Faculdade de Informática e Administração Paulista (Fiap). 
                Capaz de desenvolver soluções em Python, JavaScript, C++, HTML5 e CSS3, com conhecimento nas bibliotecas: BotCity, React, Bootstrap, Tailwind, entre outras...</p>
                <a href="../../public/pdfs/Curriculo-5.pdf" download="Currículo">
                <button id="button" className="text-white bg-blue-950 border border-blue-950 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Download CV</button>
                </a>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img className="w-3/4 md:w-full object-cover" src="../../public/imgs/desenvolvedor.png" alt="Desenvolvedor" />
            </div>
        </div>

        </>
    )
}

export default conteudo