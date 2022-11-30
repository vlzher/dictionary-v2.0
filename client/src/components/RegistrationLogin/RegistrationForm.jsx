import React, {useState} from 'react';
import CustomInput2 from "./CustomInput2";
import CustomButton2 from "./Custom-Button2";
import "../../styles/login-registration/registration-from.scss"
import axios from "axios";
import {apiLink} from "../../assets/fakewords";
import {Link} from "react-router-dom";
import {useKey} from "../../hooks/useKey";
const RegistrationForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    async function singUp() {
        await axios.post(
            `${apiLink}/api/auth/register`,
            {
                "email": email, "password": password, "username": username
            }
        ).then((response) => {
            setSuccess(true)
        }).catch((error) => {
            setError(true)
        });
    }
    const onFocus = () => {
        setError(false)
        setSuccess(false)
    }
    // eslint-disable-next-line no-unused-vars
    const enterHandler = useKey("Enter",singUp)

    return (
        <div className="registration">
            <div className="registration-active">
                <div className="registration-header">
                    <p className="registration-header1">
                        Join us<span style={{color:"#F16482"}}>!</span>

                    </p>
                    <div className="registration-header2">
                        Don't put off learning new words for later!
                    </div>
                </div>
                <CustomInput2 header={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} type={"text"} placeholder={""} isRequired={true} onFocus={()=>onFocus()}/>
                <CustomInput2 header={"Email address"} value={email} onChange={(e) => setEmail(e.target.value)} type={"text"} placeholder={""} isRequired={true} onFocus={()=>onFocus()}/>
                <CustomInput2 header={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder={""} isRequired={true} onFocus={()=>onFocus()}/>
                {error && <div className={'err-msg'}>Something went wrong.Please try again.</div>}
                {success && <div className={'success-msg'}>Confirmation link was sent to your email.Please follow the instructions.</div>}
                <CustomButton2 onClick={()=> singUp()} text={"Sign Up"}/>
                <div className="login-zone">
                    <div className="login-zone-text">
                        Already a user?
                    </div>
                    <Link to={"/login"}>
                        <div className="login-link">
                            Login
                        </div>
                    </Link>


                </div>


            </div>
        </div>
    );
};

export default RegistrationForm;
