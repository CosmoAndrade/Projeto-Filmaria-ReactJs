import React, { useEffect, useState } from "react";

import './filme-info.css'

import { useParams , useHistory } from "react-router";

import api from '../../services/api'


function Filme(){

    const {id} = useParams();
    const history = useHistory ()

    const [filme, setFilme] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme(){
    const response = await api.get(`r-api/?api=filmes/${id}`)

    if (response.data.lenght === 0){
        history.replace('/');
        return;
    }

    setFilme(response.data)
    setLoading(false)

        }
        loadFilme()

        return () => {

        }

    },[history,id])


    if (loading){
        return(
            <div className="filme-info">
            <h1>Carregando seu filme</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt ={filme.nome}/>

            <h3>Sinopse</h3>

            {filme.sinopse}

            <div className="botoes">
                <button onClick={() => {}} >Salvar</button>
                <button>
<a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>


        </div>
    )
}


export default Filme;