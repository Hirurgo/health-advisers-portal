import logo from './logo.svg';
import './App.css';
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={'64CE9C86-77F6-498B-A688-3488E6C68502'}
        userId={'HelthAdviser1'}
      />
    </div>
  );
}

export default App;
