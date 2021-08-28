import "./App.css";
import PersonList from "../Component/PersonList";
import PersonInput from "../Component/PersonInput";

function App() {
  return (
    <div className="App">
      <PersonInput />
      <PersonList />
    </div>
  );
}

export default App;
