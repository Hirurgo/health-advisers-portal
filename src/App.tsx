import './App.css';
import { App as SendBirdApp, SendBirdProviderConfig } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const config = { logLevel: 'all' } as SendBirdProviderConfig;

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={'8D6F3F52-21D4-4D1C-845A-AE252079F34B'}
        userId={'HealthAdviser1'}
        accessToken={'5bbd56c9bf357fba9381d666f26205eaf6b7e136'}
        showSearchIcon
        config={config}
      />
    </div>
  );
}

export default App;
