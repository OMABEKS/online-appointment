import React, {useState} from 'react';
import {Card, Form, Row} from "react-bootstrap";
import {NavLink,useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/const"
import {login, registration} from "../../https/userAPI";
import { useForm } from "react-hook-form";
import "./Auth.css";

const Auth = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(username, password);
            } else {
                data = await registration(username, password);
            }
        
        } catch (e) {
            // alert(e.response.data.message)
        }
    }

    return (
        <div className="enter"
        style={{ display:"flex", justifyContent:"center",height: window.innerHeight - 20}}
        >
            <Card style={{width: 500}} className="p-5">
                <h3>Войдите в свой аккаунт</h3>
                <h4>Логин</h4>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={username}
                        onChange={e => setUsername(e.target.value)}
            
                    /> 
                    

                       <h4>Пароль</h4>
                    <Form.Control
                    
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                   
                    <button
                        variant={"outline-success"}
                        className="mt-3"
                        onClick={click}
                    >
                        Войти
                    </button>
                    

                    {/* <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Row> */}
             
            </Card>
            </div>
    );
};

export default Auth;