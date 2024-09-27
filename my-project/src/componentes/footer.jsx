import "../App.css"

function footer () {
    return(
        <div className="flex justify-center">
            <div id="footer" className="w-3/4 h-10 bg-slate-800 bottom-0 fixed flex p-2 pl-4 pr-4">
                <div className="flex justify-start"><h1 className="text-white font-thin">@Copyright</h1></div>
                <div className="flex w-full justify-end">
                    <a className="flex  justify-end" href="https://www.linkedin.com/in/eduardo-tomazela-63139b289/" target="blank">
                    <img id="icon-footer" src="../../public/imgs/ln.png" alt="" />
                    </a>
                    <a className="flex  justify-end" href="" target="blank">
                    <img id="icon-footer" src="../../public/imgs/IG.png" alt="" />
                    </a>
                    <a className="flex  justify-end" href="https://github.com/du-ntomazela" target="blank">
                    <img id="icon-footer" src="../../public/imgs/git.png" alt="" />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default footer