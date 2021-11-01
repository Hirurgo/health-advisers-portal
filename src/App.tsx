import './App.css';
import { App as SendBirdApp, SendBirdProviderConfig } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const config = { logLevel: 'all' } as SendBirdProviderConfig;

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={'7A150312-83AE-4A14-8147-AD9363266809'}
        userId={'HealthAdviser1'}
        accessToken={'b200cca2488e842c61d45716058b1b7f60149731'}
        showSearchIcon
        config={config}
      />
    </div>
  );
}

export default App;
