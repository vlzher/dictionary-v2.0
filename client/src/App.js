import "./styles/app.scss"
import Footer from "./components/Footer";
import HeaderModal from "./components/HeaderModal";
import WordSearch from "./components/WordSearch";
import LoginModal from "./components/LoginModal";
import WordZone from "./components/WordZone";
function App() {
  return (
    <div className="app">
        {/*<LoginModal/>*/}
        <HeaderModal/>
        <WordZone/>
        {/*<WordSearch/>*/}
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
