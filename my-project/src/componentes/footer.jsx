import "../App.css"

function footer () {
    return(
        <div className="flex justify-center">
            <div id="footer" className="w-full md:w-3/4 h-16 bg-slate-800 fixed bottom-0 flex items-center p-4">
                <div className="flex flex-1">
                    <h1 className="text-white font-thin">@Copyright 2024</h1>
                </div>
                <div className="flex  justify-end">
                    <a href="https://www.linkedin.com/in/eduardo-tomazela-63139b289/" target="_blank" >
                        <img id="icon-footer" className="h-8 " src="\public\imgs\ln.png" alt="LinkedIn" />
                    </a>
                    <a className="flex  justify-end" href="" target="_blank" >
                        <img id="icon-footer" className="h-8 " src="\public\imgs\IG.png" alt="Instagram" />
                    </a>
                    <a className="flex  justify-end" href="https://github.com/du-ntomazela" target="_blank" >
                        <img id="icon-footer" className="h-8 " src="\public\imgs\git.png" alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default footer