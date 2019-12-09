import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const dados = {
  sala: "Sala de Jogos",
  Status: "Reservada",
  usuario: {
    nome: "Rapha",
    setor: "NTI",
    horário: {
      inicio: "18:00",
      fim: "19:00"
    }
  }
}

const Header = props => {
  return (
    <header className="blockquote">
      <h1 className="text-white ml-5 mb-1 display-3">Status: {dados.sala}</h1>
    </header>
  );
}

export default Header;
