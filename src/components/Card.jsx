import * as React from 'react';
import { useContext } from "react"
import { RecetasContext } from "../context/RecetasContext"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({ cardId, cardTitulo, cardDescription }) {
  const {eliminarReceta} = useContext(RecetasContext)
  const navigate = useNavigate()
  const handleDelete = (id) => {
    eliminarReceta(id)
    navigate('/')
  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 350, }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{textDecoration:'underline'}} >
          {cardTitulo.toUpperCase()}
        </Typography>
        <Typography variant="body2">
            {cardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{backgroundColor:'#D9534F', color:'white', cursor:'pointer'}} size="small" onClick={() => handleDelete(cardId)}>Eliminar</Button>
      </CardActions>
    </Card>
  );
}
