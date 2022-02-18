import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";

export const Home = () => {
   

  return (
    <div className="App">
      <header>
        <div className='nav'>
          <div className='auth'></div>
        </div>
        <div className='reg'> 
        <h1>
          Онлайн запись на прием к врачу
        </h1>
        <div className='line'></div>
        
        <h3>Секономьте свое время!</h3>
        <Button>Записаться к врачу</Button>
          
        </div>
      </header>

      <section>

          <div className='appointment'>
            <div className='line'></div>
            <h1> Как записаться</h1>
            <p>на прием к врачу</p>
          </div>
          <div className='var'> 

            <div>   </div>
            <div className='option'>
              <div className='num'>1</div>
              <p>Регистрация полиса на сайте</p>
            </div>
          </div>
          <div className='var'> 
            <div className='option'>
              <div className='num'></div>
              <p>Регистрация полиса на сайте</p>
            </div>
            <div><img></img></div>
          </div>
          <div className='var'> 

            <div><img></img></div>
            <div className='option'>
              <div className='num'></div>
              <p>Регистрация полиса на сайте</p>
            </div>
          </div>
          <div className='var'> 
            <div className='option'>
              <div className='num'></div>
              <p>Регистрация полиса на сайте</p>
            </div>
            <div><img></img></div>
          </div>

        
        



      </section>

      <footer>
        <div className='container'>
          <p>Телефон технической поддержки: 66-21-86</p>
          <p>introcez@mail.ru</p>
        </div>
      </footer>



      {/* <div className='auth'>
          <h3>Войдите а свой аккаунт</h3>
          <p>Login
          <input type="text" name="name" /></p>  

          <p>Password
          <input type="text" name="name" /></p> 


          <button>Войти</button>

      </div> */}
    </div>
  );
}

export default Home;





