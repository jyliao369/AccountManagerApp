import ProfileCard from "./components/ProfileCard";
import LoginRegister from "./components/LoginRegister";

function App() {
  return (
    <div className="App">
      <div className="appCont">
        <LoginRegister />

        <div className="appMainCont" id="appMainCont">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default App;
