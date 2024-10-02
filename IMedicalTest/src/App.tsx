import React, {useState} from "react";
import ComponenteBusqueda from "./BusquedaComponente";
import './App.css'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ListaNoticias from "./listaNoticiasComponent";
import ClimaInfo from "./infoClimaComponente";

const App: React.FC = () => {
    const [mostrarBarraBusq, setMostrarBarraBusq] = useState<boolean>(true);
    const [tipoBusqueda, setTipoBusqueda] = useState<number>(1);
    const [noticiasData, setNoticiasData] =useState<any[]>([]);
    const [climaData, setClimaData] = useState<any>();
    const [consultasData, setConsultasData] = useState<any[]>([]);

    const cambioTipoBusqueda = (tipo: number) => {
        setTipoBusqueda(tipo);
        setMostrarBarraBusq(tipo==1);
        if(tipo == 1){
            setConsultasData([]);
        }
    };

    const cambioResultados = (noticias: any[], clima: any, consultas: any[]) => {
        setNoticiasData(noticias);
        setClimaData(clima);
        setConsultasData(consultas);
      };

    return (
        <div>
          <div style={{ padding: '60px' }} >
            <button onClick={() => cambioTipoBusqueda(1)} style={{ marginRight: '20px' }}>
              Buscar noticias y clima
            </button>
            <button onClick={() => cambioTipoBusqueda(2)} style={{ marginLeft: '20px' }}>
              Ver historial
            </button>
          </div>
          <ComponenteBusqueda mostrarBarra={mostrarBarraBusq} tipoBusqueda={tipoBusqueda} onActualizaResultados={cambioResultados}/>

          <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={8}>
            {/* Lista de noticias */}
                {tipoBusqueda == 1 && noticiasData.length > 0 && <ListaNoticias noticiasData={noticiasData}/>}
            </Grid>
            <Grid item xs={12} md={4}>
            {/* Lista de noticias */}
                {tipoBusqueda == 1 && climaData != null && <ClimaInfo climaData={climaData}/>} 
            </Grid>
          </Grid>

          
         {/* Tabla de consultas realizadas */}
          {consultasData.length>0 && 
            <div style={{ marginTop: '40px' }}>
                <h2>Historial de Consultas</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ciudad</TableCell>
                            <TableCell>Información</TableCell>
                            <TableCell>Fecha Consulta</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultasData.map((consulta, index) =>(
                            <TableRow key={index}>
                                <TableCell>{consulta.ciudad}</TableCell>
                                <TableCell>{consulta.info}</TableCell>
                                <TableCell>{consulta.fecha}</TableCell>
                            </TableRow> 
                        ))}
                    </TableBody>
                </Table>
            </div>
            }
        </div>
      );
};

export default App;