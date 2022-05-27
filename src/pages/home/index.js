import { Link } from "react-router-dom";

export default function Index(){
    return(
        <main>
            <h1>Home</h1>
            <ul>
                <li><Link to='/corPrimaria'> Cor primária</Link></li>
                <li><Link to='/frequencia'> Frequência</Link></li>
                <li><Link to='/ingresso'> ingresso</Link></li>
                <li><Link to='/maiorNumero'> Maior número </Link></li>
                
            </ul>
        </main>
    )
}