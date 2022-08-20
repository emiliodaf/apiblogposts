import { useEffect, useState } from 'react';
import './styles.css'


//*in this project we used React hooks in order to call back the blog posts api data manipulating it in order to print it on the browser as you can see below here!*//

//*To do this we have used the standard javascript fetch get method to call the api from the backend that returns api data and mapping them all in order to load all the information on the browser*//



function App() {

const[nutri, setNutri] = useState([])


useEffect(() => {

  fetch(`https://sujeitoprogramador.com/rn-api/?api=posts`)
  .then((response) => response.json())
  .then((data) =>{
     console.log(data)
     setNutri(data)
  })

},[]);



  return (
    <div className='Container'>
   <header className='Barra_Topo'>
    <strong>React Nutrition Blog</strong>
   </header>

  {nutri.map((item) => {
    return(
      <article key={item.id} className='posts'>
       
        <strong className='Titulo'>{item.titulo}</strong>
        <img src={item.capa} alt={item.titulo} className='Subtitulo'/>
        <p>{item.subtitulo}</p> 
        <h2 className='dicas'>{item.categoria}</h2>
      <a className='botao'href='https://www.tuasaude.com/'>Acessar</a>

      </article>
    )
  })}
  
    </div>
  );
}

export default App;
