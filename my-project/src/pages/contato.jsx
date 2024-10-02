import "../App.css"
import Msg from "../componentes/mensagem"

function contato () {
    return(
        <div className="flex justify-center items-center h-screen w-full p-4 md:gap-9">
    <div className="flex flex-col h-auto w-full md:w-2/3 bg-indigo-950 rounded-xl shadow-md shadow-sky-950 p-6 md:p-10">
        <h1 id="conteudo-main" className="text-xl md:text-2xl mb-6 md:mb-8 text-center text-white">Envie-me uma mensagem:</h1>

        <h1 className="font-extrabold mb-3 md:mb-5 text-white">Nome:</h1>
        <input 
            id="input" 
            type="text" 
            placeholder="Digite seu nome completo" 
            className="w-full md:w-2/3 p-2 rounded-sm border-solid border-black mb-6 md:mb-10"
        />

        <h1 className="font-extrabold mb-3 md:mb-5 text-white">E-mail @:</h1>
        <input 
            id="input" 
            type="email" 
            placeholder="Digite seu melhor e-mail" 
            className="w-full md:w-2/3 p-2 rounded-sm border-solid border-black mb-6 md:mb-10"
        />

        <h1 className="font-extrabold mb-3 md:mb-5 text-white">Mensagem:</h1>
        <textarea 
            id="input" 
            placeholder="Sua mensagem" 
            className="w-full md:w-4/5 h-32 p-2 rounded-sm border-solid border-black mb-6 md:mb-10"
        />

        <div className="flex justify-center">
            <button 
                onClick={Msg} 
                id="button" 
                className="bg-yellow-400 w-32 p-2 text-black font-bold rounded-md"
            >
                Enviar
            </button>
        </div>
    </div>
</div>

    )
}

export default contato