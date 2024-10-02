import "../App.css"
import Msg from "../componentes/mensagem"

function contato () {
    return(
        <div className="flex justify-center h-screen w-full gap-9">
            <div className="flex-col h-5/6 w-2/3 bg-indigo-950 rounded-xl shadow-md shadow-sky-950 p-10">
            <h1 id="conteudo-main" className="text-2xl mb-8"> Envie-me uma mensagem:</h1>

            <h1 className="font-extrabold mb-5">Nome:</h1>
            <input id="input" type="text" placeholder="Digite seu nome completo" className="w-2/3 p-2 rounded-sm border-solid border-black mb-10" />

            <h1 className="font-extrabold mb-">E-mail @:</h1>
            <input id="input" type="email" placeholder="Digite seu melhor e-mail" className="w-2/3 p-2 rounded-sm border-solid border-black mb-10" />

            <h1 className="font-extrabold mb-5">Mensagem:</h1>
            <input id="input" type="text" placeholder="Sua mensagem" className="w-4/5 h-32 p-2 rounded-sm border-solid border-black mb-10" />
            <div className="w-full ">
                <button onClick={Msg} id="button" className="bg-yellow-400 w-32">Enviar</button>
            </div>
            </div>
            
        </div>
    )
}

export default contato