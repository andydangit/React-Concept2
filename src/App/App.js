import "./App.css";
import MyInfo from "../Component/MyInfo/MyInfo";
import Footer from "../Component/Footer/Footer";
import Checkbox from "../Component/CheckBox/CheckBox";
import Joke from "../Component/Joke/Joke";
import JokeData from "../Data/JokeData/JokeData";

function App() {
  const jokeComponents = JokeData.map((joke) => (
    <Joke key={joke} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <div className="App">
      <MyInfo />
      <Checkbox />
      {jokeComponents}

      <Footer />
    </div>
  );
}

export default App;
