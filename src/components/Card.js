// src/Card.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CustomCard = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
