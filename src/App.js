
import './App.css';
import Chat from './component/content/Chat';
import Account from './component/account/Account';
import BgProject from './component/backgraundProject/BgProject';

function App() {
  return (
    <div className="App reletive ">
        {/* <Account/> */}
        
        <BgProject/>
        <Chat/>
    </div>
  );
}

export default App;
