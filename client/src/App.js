import { useState, useEffect } from "react";
import Axios from "axios";

import ProfilePage from "./components/ProfilePage";
import LoginRegister from "./components/LoginRegister";
import Navigation from "./components/Navigation";
import Settings from "./components/Settings";
import AddAccount from "./components/AddAccount";

function App() {
  const [userAccounts, setUserAccounts] = useState([]);

  Axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <div className="appCont">
        <LoginRegister />

        <div className="appMainCont" id="appMainCont">
          <ProfilePage
            setUserAccounts={setUserAccounts}
            userAccounts={userAccounts}
          />
          <AddAccount />
          <Settings />
        </div>

        <Navigation
          setUserAccounts={setUserAccounts}
          userAccounts={userAccounts}
        />
      </div>
    </div>
  );
}

export default App;
