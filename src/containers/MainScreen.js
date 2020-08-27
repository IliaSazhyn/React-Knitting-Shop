import React from "react";
import Main from "../assets/images/main.jpg";
import Container from "@material-ui/core/Container";

import classes from "./MainScreen.module.scss";

const MainScreen = () => {
  return (
   
    <div className={classes.main}>
      <img src={Main} alt="MainImage" />
      <Container fixed> 
      <div className={classes.main_content}>
        
          <h3>Приветствую Вас на своем сайте!</h3>
          <p>Меня зовут Марина, в соцсетях меня можно найти, как YAMARSANA (это не
          набор букв и не какое-то волшебное слово, это мои ФИО в сокращении{" "}
          <span>YA</span>kubyshena <span>MAR</span>yna Olek<span>SAN</span>drivn
          <span>A</span> )…
        </p>
        <p>
          Если коротко о себе, то Я- сумасшедшая вязальщица! Каждый день в моих
          руках крючок или спицы, а если вдруг не они, то бусинки, по-любому…
        </p>
        <p>
          Долго о себе рассказывать не буду, у меня как у многих из Вас история
          любви к вязанию начинается с детства, когда мама/бабушка/подруга учили
          и вдохновляли своим примером вязанию. Но то было все баловство с моей
          стороны, настоящее увлечение пришло ко мне лет 7 назад, с тех пор вяжу
          много для себя, родных и на заказ всем желающим.
        </p>
        <p>
          Сейчас я не только вяжу. но и учу вязать других. Здесь Вы можете
          приобрести МК с подробными описаниями, вступить в чат с совместным
          вязанием разных изделий или купить необходимые товары – помощники для
          вязальщиц.
        </p>
        <p>
          Если ты не умеешь вязать, а так хочется купить готовое изделие
          переходи по ссылке:
        </p>

        <div className={classes.links}>
          <div className={classes.links_content}>
            <a href="https://www.etsy.com/shop/YamarsanaKnitwear">
              <h5>
                ОДЕЖДА:
                <br />
                https://www.etsy.com/shop/YamarsanaKnitwear
              </h5>
            </a>
          </div>
          <div className={classes.linksContent}>
            <a href="https://www.etsy.com/shop/YAMARSANA">
              <h5>
                УКРАШЕНИЯ:
                <br />
                https://www.etsy.com/shop/YAMARSANA
              </h5>
            </a>
          </div>
        </div>

        <h3>ДОБРО ПОЖАЛОВАТЬ! ПРИЯТНОГО ПРОСМОТРА И УДАЧНЫХ ПОКУПОК!</h3>
      </div>
      </Container>
    </div>
   
  );
};

export default MainScreen;
