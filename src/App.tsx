import './App.css';
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={'0C34BECA-CD93-4409-8CC6-AA6C5DB3B819'}
        userId={'HealthAdviser1'}
        accessToken={'a178dab1c39df763b5af7ced8d89741a1e78349d'}
        showSearchIcon
      />
    </div>
  );
}

export default App;
