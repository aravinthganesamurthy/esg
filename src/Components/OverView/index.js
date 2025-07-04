import KPI from "./KPI";
// import Example from './BarCharts.js';
import Table from "./Table";
import Select from "./Select.js";
import { Box, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import BarCharts from "./BarCharts.js";
import RiskCompany from "./RiskCompany.js";

function OverViewLayout() {

    return (
        <Container maxWidth={false}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Box sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography variant="h4" >
                            ESG Monitoring Dashboard
                        </Typography>
                        <Typography variant="h5" >
                            Monitor & Track ESG Score Calulations
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={12}>
                    <Select />
                </Grid>

                <Grid size={12}>
                    <KPI />
                </Grid>

                <Grid size={12}>
                    <RiskCompany />
                </Grid>

                <Grid size={12}>
                    <BarCharts />
                </Grid>

                <Grid size={12}>
                    <Table />
                </Grid>
            </Grid>

        </Container>
    );
}

export default OverViewLayout;