import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import PhoneBar from "./PhoneBar/PhoneBar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Hello TailWind</h1>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
