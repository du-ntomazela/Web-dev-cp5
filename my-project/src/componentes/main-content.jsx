import "../App.css"

function conteudo () {
    return(
        <>
        <div className="flex justify-center">
            <div className="flex-col">
                <div id="conteudo-main" className="text-5xl mb-8">Olá me chamo<h1 className="text-emerald-600">Eduardo Tomazela,</h1> sou um engenheiro de software!</div>
                <p className="text-white">Atualmente estou cursando o segundo semestre do curso de engenharia de software na Faculdade de Informática e Administração Paulista (Fiap). Capaz de desenvolver soluções em Python, JavaScript, C++, HTML5 e CSS3, com conhecimento nas bibliotecas: BotCity, React, Bootstrap, Tailwind, entre outras...</p>
            </div>
            <img src="../../public/imgs/desenvolvedor.png" alt="" />
            </div>
        </>
    )
}

export default conteudo