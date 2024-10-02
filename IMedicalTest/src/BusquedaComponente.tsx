import React, { useState }from 'react';
import { Button, TextField } from '@mui/material';
import ListaNoticias from './listaNoticiasComponent';
import ClimaInfo from './infoClimaComponente';

interface BusquedaProps{
    mostrarBarra: boolean;
    tipoBusqueda: number;
    onActualizaResultados: (noticias: any[], clima: any, consultas: any[]) => void;
}

const ComponenteBusqueda: React.FC<BusquedaProps> = ({mostrarBarra, tipoBusqueda, onActualizaResultados}) =>{

    const [query, setQuery] = useState<string>('');

    const busqueda = async () => {
        if(tipoBusqueda == 1){
            const response = await fetch(
                `https://localhost:7267/api/Consultas/consulta-noticias-clima?nombreCiudad=${query}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            };

            const data = await response.json();

            onActualizaResultados(data.noticias, data.ultimoClima, []);
        }else{
            const response = await fetch(
                'https://localhost:7267/api/Consultas/consultas-realizadas', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();

            onActualizaResultados([], null, data);
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
          {mostrarBarra && (
            <TextField 
                id="standard-basic" 
                label="Buscar Ciudad" 
                variant="standard" 
                placeholder= "Ingrese el nombre de la ciudad"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
                />
          )}
          <Button variant="contained" color="primary" onClick={busqueda} style={{ marginTop: '20px' }}>
            {tipoBusqueda === 1 ? 'Buscar' : 'Ver Consultas'}
          </Button>
        </div>
      );
};

export default ComponenteBusqueda;