import "./App.css";
import { BrowserRouter} from "react-router-dom";
import MyRoute from "./route";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
