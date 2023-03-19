import { useState, useEffect } from "react";

import ProfilePage from "./components/ProfilePage";
import LoginRegister from "./components/LoginRegister";
import Navigation from "./components/Navigation";

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
        </div>

        <Navigation />
      </div>
    </div>
  );
}

export default App;
