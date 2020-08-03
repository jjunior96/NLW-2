import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id='search-teachers'>
          <div className='input-block'>
            <label htmlFor='subject'>Matéria</label>
            <input type='text' id='subject' />
          </div>

          <div className='input-block'>
            <label htmlFor='week-day'>Dia da semana</label>
            <input type='text' id='week-day' />
          </div>

          <div className='input-block'>
            <label htmlFor='time'>Hora</label>
            <input type='text' id='time' />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className='teacher-item'>
          <header>
            <img
              src='https://avatars0.githubusercontent.com/u/30422190?s=460&u=98382289c345c9ac341e5ecbb74ae6eebe44e3ac&v=4'
              alt='Junior Alves'
            />
            <div>
              <strong>Junior Alves</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta em React
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            eum ut quam fugiat obcaecati temporibus.
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
      </main>
    </div>
  );
}

export default TeacherList;
