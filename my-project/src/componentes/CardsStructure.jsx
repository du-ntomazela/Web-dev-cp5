import "../App.css"
import data from "../Data/cards-content.json"


export default function Cards (title, img) {
    return (
        <>
        <div className="text-center">
            <h1 id="conteudo-main" className="text-4xl md:text-6xl font-bold mb-8">Projetos</h1>
        </div>
        <section className="w-full h-16 md:h-32"></section>
        <div className="flex flex-wrap gap-8 md:gap-24 justify-center">
        {data.map((content) => {
            return(
                

                
                <div className="flex flex-col p-5 h-auto w-full max-w-xs bg-indigo-950 rounded-lg shadow-lg">
                <h1 className="text-center text-xl font-bold text-white mb-4">{content.title}</h1>
                
                <div className="flex justify-center">
                    <img className="mb-4 w-full max-w-xs h-40 object-cover rounded-md" src={content.img} alt="Imagem do projeto" />
                </div>
            
                <p className="text-white text-center mb-5">{content.content}</p>
                
                <div className="flex justify-center">
                    <a href={content.link} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 text-black bg-yellow-400 rounded-md hover:bg-yellow-300">Acessar</button>
                    </a>
                </div>
            </div>
            
                
        
            )
        })}

        
</div>       
        
</>   )    
    
}

