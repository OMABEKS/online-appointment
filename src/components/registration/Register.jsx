import React, {useState} from 'react';
import {Card, Form , NavLink , Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/const"
import {login, registration} from "../../https/userAPI";
import { useForm } from "react-hook-form";

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [name , setName] = useState('')
    const [lastname , setLastname] = useState('')
    const [middlename , setMiddlename] = useState('')
    const [dateOfBirth , setDateBirth] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
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
                <h4>Имя</h4>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        {...register("email", { required: true, maxLength: 11 })}
                    /> 
                      <h4>Фамилия</h4>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        {...register("email", { required: true, maxLength: 11 })}
                    /> 
                     <h4>Отчество</h4>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        {...register("email", { required: true, maxLength: 11 })}
                    /> 
                     <h4>Дата рождения</h4>
                    <Form.Control
                        type='date'
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        {...register("email", { required: true, maxLength: 11 })}
                    /> 
                     <h4>Логин</h4>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        {...register("email", { required: true, maxLength: 11 })}
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

                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                    </Row>
             
            </Card>
            </div>
    );
};
