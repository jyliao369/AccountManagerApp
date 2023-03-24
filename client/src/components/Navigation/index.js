import React from "react";
import $ from "jquery";

const Navigation = ({ setUserAccounts, userAccounts }) => {
  const logOut = () => {
    $("#appMainCont").css({ display: "none" });
    $("#navigationBar").css({ display: "none" });
    $("#logRegForm").css({ display: "flex" });
    setUserAccounts([]);
  };

  const switchPages = (page) => {
    $("#addAccountPageA").css({ display: "flex" });
    $("#addAccountPageB").css({ display: "none" });

    $("#updatePageA").css({ display: "flex" });
    $(`#updatePageB`).css({ display: "none" });

    $("#appMainCont").children().css({ display: "none" });
    $(page).css({ display: "flex" });
  };

  return (
    <div className="navigationBar" id="navigationBar">
      <button onClick={() => switchPages("#profileCardPage")}>Home</button>
      <button onClick={() => switchPages("#settingsPage")}>Settings</button>
      <button onClick={() => switchPages("#addAccountPage")}>
        Add Account
      </button>
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
};

export default Navigation;
