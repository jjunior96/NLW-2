import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars0.githubusercontent.com/u/30422190?s=460&u=98382289c345c9ac341e5ecbb74ae6eebe44e3ac&v=4'
          alt='Junior Alves'
        />
        <div>
          <strong>Junior Alves</strong>
          <span>React</span>
        </div>
      </header>

      <p>
        Entusiasta em React
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum ut
        quam fugiat obcaecati temporibus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
