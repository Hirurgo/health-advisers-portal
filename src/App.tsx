import './App.css';
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={'404E369B-11BC-40B0-A950-DBBAA9896B59'}
        userId={'HelthAdviser1'}
        showSearchIcon
      />
    </div>
  );
}

export default App;
