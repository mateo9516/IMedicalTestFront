import React from 'react';
import { Grid, CardContent, Typography } from '@mui/material';

interface ListaNoticiasProps{
    noticiasData:{
        titulo:string,
        descripcion:string,
        autor: string,
        fecha: string;
    }[];
}

const ListaNoticias: React.FC<ListaNoticiasProps> = ({ noticiasData }) =>{
    return(
        <Grid container spacing={3}>
            {noticiasData.map((noticiasItem, index) =>(
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CardContent>
                        <Typography variant="h6">{noticiasItem.titulo}</Typography>
                        <Typography variant="body2">{noticiasItem.descripcion}</Typography>
                        <Typography variant="subtitle1">Por: {noticiasItem.autor}</Typography>
                        <Typography variant="caption">{noticiasItem.fecha}</Typography>
                    </CardContent>
                </Grid>
            ))}
        </Grid>
    );
};

export default ListaNoticias;