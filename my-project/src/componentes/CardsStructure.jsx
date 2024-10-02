import "../App.css"
import data from "../Data/cards-content.json"


export default function Cards (title, img) {
    return (
        <>
        <div className="text-center">
        <h1 id="conteudo-main" className="text-6xl">Projetos</h1>
        </div>
        <section className="w-full h-32"></section>
        <div className="flex-wrap flex gap-24 justify-center">
        
        {data.map((content) => {
            return(
                

                
                    <div className="flex-col p-5 h-auto w-72 bg-indigo-950 rounded-lg">
    
                    <h1 className="text-center mb-7 text-white">{content.title}</h1>
                    <div className="flex justify-center">
                        <img className="mb-7 max-w-56 max-h-40" src={content.img} alt="Imagem do projeto" />
                    </div>
                    <p className="text-white text-center mb-5">{content.content}</p>
                    <div className="">
                        <a href={content.link} target="balnk">
                            <button id="button" className="text-black bg-yellow-400">Acessar</button>
                        </a>
                    </div>
                </div>
                
        
            )
        })}

        
</div>       
        
</>   )    
    
}

