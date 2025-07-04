import './App.css';
import ESGDashboard from "./Components/OverView"
import { withESGValue } from "./Context/esg";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <ESGDashboard />
    </div>
  );
}

export default withESGValue(App);
