import React, { useState } from 'react';
import '../Components/Navbar.css'



const Vista = () => {

    const [links,setLinks]=useState([{titulo:"Tab 1", estado:"active"},{titulo:"Tab 2", estado:""},{titulo:"Tab 3", estado:""}]);
    const [textos,setTexto] = useState([{textos:"probando texto de la tab1", estado:"contents"},{textos:"probando texto de la tab2", estado:"none"},{textos:"probando texto de la tab3", estado:"none"},])

    const changeActive = (i) => {

        let newLink = links.map((link,index)=>{
            index===i?link.estado="active": link.estado="";
            return link
        })
        setLinks(newLink) 

        let newTexto = textos.map((texto,x) =>{
            x===i?texto.estado="contents": texto.estado="none" ;
            return texto
        })
        setTexto(newTexto)        

    }
    

    

    return (
        <div>
            <header>
                <h1>Pestañas</h1>
            </header>
            <main className='main'>
                <div className="navbar">
                    {
                        links.map((link,i) => {return(<h2 key={i} className={link.estado} onClick={() => changeActive(i)}>{link.titulo}</h2>)})
                    }
                </div>
            </main>
            <footer>
                <div>
                    {
                        textos.map((texto,i)=>{return(<p key={i} style={{display:`${texto.estado}`}} onClick={() => changeActive(i)}>{texto.textos} </p>)})
                    }  
                </div>
            </footer>
        </div>
    );
}

export default Vista;
