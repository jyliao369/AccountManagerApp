import { useState, useEffect } from "react";
import Axios from "axios";

import ProfilePage from "./components/ProfilePage";
import LoginRegister from "./components/LoginRegister";
// import Navigation from "./components/Navigation";
// import Settings from "./components/Settings";
// import AddAccount from "./components/AddAccount";

function App() {
  const [userAccounts, setUserAccounts] = useState([]);
  const [newAcccount, setNewAccount] = useState({
    accName: "",
    accUsername: "",
    accPassword: "",
    accEmail: "",
    accPhoneNum: "",
    accTwoStep: false,
    accSecQues: false,
    accSecOne: "N/A",
    accAnsOne: "N/A",
    accSecTwo: "N/A",
    accAnsTwo: "N/A",
    accSecThree: "N/A",
    accAnsThree: "N/A",
  });
  const [currentUser, setCurrentUser] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");

  Axios.defaults.withCredentials = true;

  return (
    <div className="App">
      <div className="appCont">
        <LoginRegister
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setCurrentIcon={setCurrentIcon}
          currentIcon={currentIcon}
        />

        <div className="appMainCont" id="appMainCont">
          <ProfilePage
            setUserAccounts={setUserAccounts}
            userAccounts={userAccounts}
            setNewAccount={setNewAccount}
            newAcccount={newAcccount}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            setCurrentIcon={setCurrentIcon}
            currentIcon={currentIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
