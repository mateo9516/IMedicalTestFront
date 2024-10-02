import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

interface InfoClimaProps {
    climaData:{
        fechaObservacion:string,
        temperatura:number,
        descripcion:string,
        velocidadViento:number,
        precipitacion: number,
        humedad: number,
        visibilidad: number
    };
}

const ClimaInfo: React.FC<InfoClimaProps> = ({ climaData }) => {
    return (
        <Card style={{ marginTop: '20px'}}>
            <CardContent>
                <Typography variant="h6">Información del clima</Typography>
                <Typography variant="body1">Fecha de registro: {climaData.fechaObservacion}</Typography>
                <Typography variant="body1">Temperatura: {climaData.temperatura}</Typography>
                <Typography variant="body1">Description: {climaData.descripcion}</Typography>
                <Typography variant="body1">Velocidad del viento:{climaData.velocidadViento} </Typography>
                <Typography variant="body1">Precipitacion: {climaData.precipitacion}</Typography>
                <Typography variant="body1">Humedad: {climaData.humedad}</Typography>
                <Typography variant="body1">Visibilidad: {climaData.visibilidad}</Typography>
            </CardContent>
        </Card>
    );
};

export default ClimaInfo;