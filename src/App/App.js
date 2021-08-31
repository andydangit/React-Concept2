import "./App.css";
import MyInfo from "../Component/MyInfo/MyInfo";
import Footer from "../Component/Footer/Footer";
import Checkbox from "../Component/CheckBox/CheckBox";
import Joke from "../Component/Joke/Joke";

function App() {
  return (
    <div className="App">
      <MyInfo />
      <Checkbox />
      <Joke jokes={{ punchline: "None, becuase it's a hardware problem" }} />
      
      <Joke
        jokes={{
          question: "What's the best thing about Switzerland?",
          punchline: "I don't know, but the flag is a big plus!",
        }}
      />
      <Joke
        jokes={{
          question: "Hear about the new restaurant called Karma?",
          punchline: "THere's no menu: you get what you deserve",
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
