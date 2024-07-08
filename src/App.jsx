import "./App.css";
import Clockheading from "./components/clockheading";
import Clockslogan from "./components/clockslogan";
import Clocktime from "./components/clocktime";

function App() {
  return (
    <center>
      <Clockheading></Clockheading>
      <Clockslogan></Clockslogan>
      <Clocktime></Clocktime>
    </center>
  );
}

export default App;
