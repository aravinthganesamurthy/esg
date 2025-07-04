import KPI from './KPI';
// import Example from './BarCharts.js';
import Table from './Table';
import Select from './Select.js';
import { Grid, Typography, Button } from '@mui/material';
import Container from '@mui/material/Container';
import BarCharts from './BarCharts.js';
import RiskCompany from './RiskCompany.js';

function OverViewLayout() {
  return (
    <Container className='main-container'>
      <Grid container spacing={2}>
        <div className='title-card-container'>
          <div>
            <Typography variant='h4'>ESG Monitoring Dashboard</Typography>
            <Typography variant='h5'>
              Monitor & Track ESG Score Calulations
            </Typography>
          </div>

          <div className='select-filter-with-update'>
            <div className='select-filter'>
              <Select />
            </div>
              <Button variant='outlined' className='update-button'>Update</Button>
          </div>
        </div>

        <Grid size={12}>
          <KPI />
        </Grid>

        <Grid container spacing={4}>
          <Grid size={8}>
            <BarCharts />
          </Grid>

          <Grid size={4}>
            <RiskCompany />
          </Grid>
        </Grid>

        <Grid size={12}>
          <Table />
        </Grid>

        <Grid size={12}>
          <Typography variant='h5' className='copy-right-footer'>
            Copyright © 2025 Ethyx. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OverViewLayout;
