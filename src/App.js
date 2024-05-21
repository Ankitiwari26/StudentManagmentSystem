import "./App.css";
import Main from "./Components/Main";
import { StudentProvider } from "./Components/StudentProvider";

function App() {
  return (
    <div className="App">
      <StudentProvider>
        <Main />
      </StudentProvider>
    </div>
  );
}

export default App;
