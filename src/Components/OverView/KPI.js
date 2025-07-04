import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useESGData } from '../../Context/esg';



function SelectActionCard() {


    const { filteredData } = useESGData();


    const cards = [
        {
            id: 1,
            title: 'Total Entries',
            value: filteredData.length
        },
        {
            id: 2,
            title: 'Avg. ESG Score',
            value: `${filteredData.reduce((sum, item) => sum + item["ESG Composite Score"] / filteredData.length, 0).toFixed(2)} %`
        },
        {
            id: 3,
            title: 'Avg. Carbon Emissions',
            value: `${filteredData.reduce((sum, item) => sum + item["Environment"]["Carbon Emissions (Tonnes)"] / filteredData.length, 0).toFixed(2)} %`
        },
        {
            id: 4,
            title: 'Avg. Pollution Index',
            value: `${filteredData.reduce((sum, item) => sum + item["Environment"]["Pollution Index (Out of 1)"] / filteredData.length, 0).toFixed(2)} %`
        },
    ];



    return (
        <Grid container spacing={2}>
            {cards.map(it => <Grid size={3}>
                <Card sx={{ width: '100%', }}>
                    <CardContent sx={{ height: '100%' }}>
                        <Typography variant="h6" component="div">
                            {it.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {it.title}
                        </Typography>
                    </CardContent>
                </Card>

            </Grid>)}
        </Grid>
    );
}

export default SelectActionCard;