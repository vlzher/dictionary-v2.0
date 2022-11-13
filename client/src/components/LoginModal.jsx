import React, {useState} from 'react';
import CustomInput from "./CustomInput";
import "../styles/login-modal.scss"
import CustomButton from "./CustomButton1";
import {useKey} from "../hooks/useKey";
import {useActions} from "../hooks/useActions";
const LoginModal = () => {
    const [active, setActive] = useState(true);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const {addUsername,addFakeWords} = useActions();
    function buttonFunc() {
        // send to redux username
        if(login && password){
            if(login === "test" && password === "test"){
                addFakeWords();
            }
            addUsername(login)
            setLogin("")
            setPassword("")
            setActive(false)
        }

    }

    // eslint-disable-next-line
    const enterHandler = useKey("Enter",buttonFunc)
    return (
        <div className= {active ? "login-modal active" : "login-modal"}>
           <div className={active ? "login-modal-content active" : "login-modal-content"}>
               <div className="login-input-zone">
                   <CustomInput
                        value={login}
                        type={"text"}
                        placeholder={"Login"}
                        onChange={e=>setLogin(e.target.value)}

                   />
                   <CustomInput
                       value={password}
                       type={"password"}
                       placeholder={"Password"}
                       onChange={e=>setPassword(e.target.value)}


                   />
               </div>
               <div className="login-button-zone">
                   <CustomButton
                   style={{width:"30%",height:"60%",fontSize:"2rem"}}
                   txt={"ENTER"}
                   onClick={()=>(buttonFunc())}


                   />
               </div>


           </div>
        </div>
    );
};

export default LoginModal;