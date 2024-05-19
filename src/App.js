import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import MainDrawer from './components/MainDrawer';
import ApiEventMain from './components/metrics/api/live/ApiEventMain';
import ApiStatMain from './components/metrics/api/statistics/ApiStatMain';

function App() {
  //State info
  const defaultDisplay = {
    activeLayout: "Home"
  };
  const [activeLayout, setActiveLayout] = React.useState("Home");

  const handleLayoutChange = (newLayout) => {
    setActiveLayout(newLayout);
  };

  //Rendering
  var currentPanel;
  switch(activeLayout) {
    case "Home":
      currentPanel=null; //TODO
      break;
    case "Live Monitoring":
      currentPanel=<ApiEventMain/>
      break;
    case "Statistics":
        currentPanel=<ApiStatMain/>
        break;
    default:
      break;
  }

  return (
    <div className="App">
      <MainDrawer handleLayoutChange={handleLayoutChange}/>
      {currentPanel}
    </div>
  );
}

export default App;
