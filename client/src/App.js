import "./styles/app.scss"
import RegistrationForm from "./components/RegistrationLogin/RegistrationForm";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "./components/RegistrationLogin/LoginForm";
import Dictionary from "./components/Dictionary";
import StartForm from "./components/StartForm";
function App() {
  return (
    <div className="app">
        <Routes>
            <Route path="/registration" element={<RegistrationForm/>}/>
            <Route path="/" element={<StartForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/words" element={<Dictionary/>}/>
            {/*<Route path="*" element={<Navigate to={"/login"} replace/>}/>*/}
        </Routes>
    </div>
  );
}

export default App;
