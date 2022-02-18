import {Routing}  from "./Routing";
import {BrowserRouter} from "react-router-dom"
import {Header} from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Routing />
          </BrowserRouter>
    </div>
  );
}

export default App;
