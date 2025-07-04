import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import { useESGData } from '../../Context/esg';

function SelectActionCard() {
  const { filteredData } = useESGData();

  const categorizeScore = (score) => {
    if (score > 85) return 'High';
    if (score >= 70) return 'Medium';
    return 'Low';
  };

  const filterTopCompany = [...filteredData]
    .sort((a, b) => b['ESG Composite Score'] - a['ESG Composite Score'])
    .slice(0, 3);

  const riskCategories = filteredData.reduce(
    (acc, company) => {
      const category = categorizeScore(company['ESG Composite Score']);
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    { High: 0, Medium: 0, Low: 0 }
  );

  return (
    <Grid container spacing={4} justifyContent={'space-around'}>
      <Grid size={12}>
        <Card sx={{ width: '100%' }} className='mid-card-container'>
          <CardContent sx={{ height: '100%' }} className='mid-card-child'>
            <Typography variant='h6' component='div' className='mid-title'>
              Risk Distribution
            </Typography>
            <Stack
              direction='row'
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {'Low '} <span className='low-color'>{'( > 85 )'}</span>
              </Typography>
              <Typography gutterBottom variant='h6' component='div' className='low-color'>
                {riskCategories['Low']}
              </Typography>
            </Stack>

            <Stack
              direction='row'
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {'Medium '} <span className='medium-color'>{'( 70 - 85 )'}</span>
              </Typography>
              <Typography gutterBottom variant='h6' component='div' className='medium-color'>
                {riskCategories['Medium']}
              </Typography>
            </Stack>

            <Stack
              direction='row'
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant='subtitle1' component='div'>
                {'High'} <span className='high-color'>{'( 70 )'}</span>
              </Typography>
              <Typography gutterBottom variant='h6' component='div' className='high-color'>
                {riskCategories['High']}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ width: '100%' }} className='mid-card-container'>
          <CardContent sx={{ height: '100%' }} className='mid-card-child company-list'>
            <Stack
              direction='row'
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h6' component='div'>
                Top 3 Companies
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                ESG
              </Typography>
              <Typography gutterBottom variant='h6' component='div'>
                YoY
              </Typography>
            </Stack>

            {filterTopCompany.map((it) => (
              <Stack
              className='top-company-group'
                direction='row'
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Typography gutterBottom variant='subtitle1' component='div'>
                  {it['Company Name']}
                </Typography>
                <Typography gutterBottom variant='h6' component='div'>
                  {it['ESG Composite Score']}
                </Typography>
                <Typography gutterBottom variant='h6' component='div'>
                  {(
                    (it['ESG Composite Score'] -
                      it['ESG Composite Score (Prev. Year)']) /
                    2
                  ).toFixed(2)}
                </Typography>
              </Stack>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SelectActionCard;
