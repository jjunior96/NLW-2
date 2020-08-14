import React from 'react';

import InputLogin from '../../components/InputLogin';

import logo from '../../assets/images/logo.svg';

import './styles.css';

function LoginPage() {
  return (
    <div className="login-wrapper">
      <section className="image-wrapper">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>
            Sua plataforma de <br /> estudos online.
          </h1>
        </div>
      </section>
      <section className="input-wrapper">
        <div className="login-title">
          <h1>Fazer login</h1>
          <a className="create" href="#">
            Criar uma conta
          </a>
        </div>
        <InputLogin id="input" name="name" label="" placeholder="E-mail" />
        <InputLogin id="input" name="name" label="" placeholder="Senha" />

        <footer>
          <div className="options">
            <div className="input-container">
              <input type="checkbox" name="name" id="input-password" />{' '}
              <span>Lembrar-me</span>
            </div>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit">Entrar</button>
        </footer>
      </section>
    </div>
  );
}

export default LoginPage;
