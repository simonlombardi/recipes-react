import * as React from 'react';
import { useContext } from "react"
import { RecetasContext } from "../context/RecetasContext"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CardDetail({ cardTitulo, cardDescription }) {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
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
        <Button style={{backgroundColor:'#4A90E2', color:'white', cursor:'pointer'}} size="small" onClick={handleGoBack}>Volver</Button>
      </CardActions>
    </Card>
  );
}
