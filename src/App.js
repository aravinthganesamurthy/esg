import './App.css';
import ESGDashboard from './Components/OverView';
import { withESGValue } from './Context/esg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box } from '@mui/material';
import Sidebar from './Components/Sidebar';

const drawerWidth = 345;

function App() {
  return (
    <div className='App'>
      <Box sx={{ display: 'flex'}} className="main-container-with-sidebar">
        <Sidebar drawerWidth={drawerWidth} />
        <ESGDashboard />
      </Box>
    </div>
  );
}

export default withESGValue(App);
