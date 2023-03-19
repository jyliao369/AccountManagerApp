import React from "react";
import $ from "jquery";

const Navigation = () => {
  const logOut = () => {
    $("#appMainCont").css({ display: "none" });
    $("#navigationBar").css({ display: "none" });
    $("#logRegForm").css({ display: "flex" });
  };

  return (
    <div className="navigationBar" id="navigationBar">
      <button>Home</button>
      <button>Settings</button>
      <button>Add Account</button>
      <button onClick={() => logOut()}>Log Out</button>
    </div>
  );
};

export default Navigation;
