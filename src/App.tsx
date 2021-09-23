import './App.css';
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={'E8CDDF0A-13CC-400E-BD8D-4E4C660E6C11'}
        userId={'HelthAdviser1'}
        showSearchIcon
      />
    </div>
  );
}

export default App;
