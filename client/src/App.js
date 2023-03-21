import { useState, useEffect } from "react";

import ProfilePage from "./components/ProfilePage";
import LoginRegister from "./components/LoginRegister";
import Navigation from "./components/Navigation";
import Settings from "./components/Settings";

function App() {
  const [userAccounts, setUserAccounts] = useState([]);

  return (
    <div className="App">
      <div className="appCont">
        <LoginRegister />

        <div className="appMainCont" id="appMainCont">
          <ProfilePage
            setUserAccounts={setUserAccounts}
            userAccounts={userAccounts}
          />
          <Settings />

          <br />
          <br />
          <br />
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
