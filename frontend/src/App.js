import "./App.css";
import ResponsiveAppBar from "./components/navbar";
import FirmwareSelector from "./components/pages/main/main";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <FirmwareSelector />
    </div>
  );
}

export default App;
