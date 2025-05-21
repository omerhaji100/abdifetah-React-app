import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { Tiriye } from "./components/counter";
import ThemeToggle from "./components/ThemeSwitcher.jsx";
import Clicker from "./components/Clicker.jsx";
import Inputer from "./components/Inputer.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Notification from "./components/Notification.jsx";

function App() {
  return (
    <>
      <ThemeToggle />
      <Inputer />
      <Header />
      <WelcomeMessage isLoggedIn={true} />

      <Greeting name="Abdifetah" surname="hajiali" />
      <Greeting name="Abdifetah" surname="hajiali" />
      <Dashboard isLoggedIn={true} />

      <Notification hasNewMessages ={true} />
      <Tiriye />
      <Clicker />
    </>
  );
}

export default App;
