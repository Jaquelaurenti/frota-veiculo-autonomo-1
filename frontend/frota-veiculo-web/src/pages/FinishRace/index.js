import React, { useState } from 'react';
import './style.css'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'
export default function FinishRace(){
    // criando os estados para manipular os inputs 
    const [vehicle, setVehicle] = useState('');
    const [timeArrival, setTime] = useState('');
    const [status, setStatus] = useState('');
    
    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        // Objeto que está sendo instanciado pelo input e será utilizado na API 
        const data ={vehicle, timeArrival, status};

        try{
            //const res = await api.post('users',data);
            //alert(`Seu ID de acesso: ${res.data.telephone}`);
            history.push('/profile');
        }
        catch (err){
            alert('Erro ao finalizar corrida!');
        }    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Me Leva Ai"/>
                <h1>Estamos chegando ao fim</h1>
                <p>Verique se não ficou nenhum pertence do passageiro no Me Leva Aí!.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color = "#E02041"/>
                    Histórico de Corridas
                </Link>

                </section>
                <form onSubmit={handleRegister}>
                <input 
                    placeholder="Veículo"
                    value={`DDX-2118`}
                    onChange={e => setVehicle(e.target.value)}
                    disabled={true}
                
                />
                <input 
                    type="Destino" 
                    placeholder="Destino"
                    value={''}
                    onChange={e => setTime(e.target.value)}
                    disabled={true}
                />
                <input 
                    placeholder="Hora de chegada"
                    value={''}
                    onChange={e => setStatus(e.target.value)}
                    disabled={true}
                />                      

                <button className="button" type="submit">Finalizar Corrida</button>

                </form>
            </div>
        </div>
    );
}