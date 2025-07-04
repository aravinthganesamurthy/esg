import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useESGData } from '../../Context/esg';
import Total from '../../img/Total.svg';
import Avg from '../../img/Avg.svg';
import Carbon from '../../img/Carbon.svg';
import Pollution from '../../img/Pollution.svg';

function SelectActionCard() {
  const { filteredData } = useESGData();

  const cards = [
    {
      id: 1,
      title: 'Total Entries',
      icon: Total,
      value: filteredData.length,
    },
    {
      id: 2,
      title: 'Avg. ESG Score',
      icon: Avg,
      value: `${filteredData.reduce((sum, item) => sum + item['ESG Composite Score'] / filteredData.length, 0).toFixed(2)} %`,
    },
    {
      id: 3,
      title: 'Avg. Carbon Emissions',
      icon: Carbon,
      value: `${filteredData.reduce((sum, item) => sum + item['Environment']['Carbon Emissions (Tonnes)'] / filteredData.length, 0).toFixed(2)} %`,
    },
    {
      id: 4,
      title: 'Avg. Pollution Index',
      icon: Pollution,
      value: `${filteredData.reduce((sum, item) => sum + item['Environment']['Pollution Index (Out of 1)'] / filteredData.length, 0).toFixed(2)} %`,
    },
  ];

  return (
    <Grid container spacing={4}>
      {cards.map((it) => (
        <Grid size={3}>
          <Card sx={{ width: '100%' }} className={`small-info-card ${it.title}`}>
            <img src={it.icon} alt='' />
            <CardContent sx={{ height: '100%' }}>
              <Typography variant='body2' color='text.secondary' className='card-title'>
                {it.title}
              </Typography>
              <Typography variant='h6' component='div' className='card-value'>
                {it.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default SelectActionCard;
