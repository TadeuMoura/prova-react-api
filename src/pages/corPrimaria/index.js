import axios from "axios"
import { useState } from "react"

export default function Index(){
    
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState ('');

    async function verficarCorPrimaria() {
       const resp = await axios.get('http://localhost:5000/corprimaria/' + cor);
        
       if (resp.data.cor === true) {setResposta('SIM');}  
        else{setResposta ('NÃO');}
    }

    return(
        <main>
            <h1>
                Cor primária
            </h1>
            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} /> 
            </div>
            <div>
                <button onClick={verficarCorPrimaria}>Verificar</button>
            </div>
            <div>
                É cor primária? {resposta}
            </div>
        </main>
    )
}