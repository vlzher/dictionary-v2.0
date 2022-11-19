import React, {useState} from 'react';
import CustomInput2 from "./CustomInput2";
import CustomButton2 from "./Custom-Button2";
import {Link, useNavigate} from "react-router-dom";
import "../../styles/login-registration/login-form.scss"
import axios from "axios";
import {apiLink} from "../../assets/fakewords";
import {useActions} from "../../hooks/useActions";
const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {addUsername,addToken} = useActions()
    const navigate = useNavigate();

    function updateData(data){
        addUsername(data.username)
        addToken(data.accessToken)

    }

    function singIn() {
        try{
            const res = axios.post(`${apiLink}/api/auth/login`,{
                "email": email,
                "password": password,
            }).then((res)=> updateData(res.data)).then(() => navigate('/words'))
        }
        catch (e){
            console.log(e)
        }

    }

    return (
        <div className="login">
            <div className="login-active">
                <div className="login-header">
                    <p className="login-header1">
                        {/*<span style='color: black'>*/}
                        {/*    Join Us*/}
                        {/*</span>*/}
                        {/*<span style='color: #F16482'>*/}
                        {/*    !*/}
                        {/*</span>*/}
                        Log in your Account

                    </p>
                    <div className="login-header2">
                        To Learn New Words!
                    </div>
                </div>
                <CustomInput2 header={"Email address"} value={email} onChange={(e) => setEmail(e.target.value)} type={"text"} placeholder={""} isRequired={true}/>
                <CustomInput2 header={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder={""} isRequired={true}/>
                <CustomButton2 onClick={()=> singIn()} text={"Sing In"}/>
                <div className="login1-zone">
                    <div className="login1-zone-text">
                        -A new user?
                    </div>
                    <Link to={"/registration"}>
                        <div className="login1-link">
                            Sign up
                        </div>
                    </Link>


                </div>


            </div>
        </div>
    );
};

export default LoginForm;