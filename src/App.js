import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import SwitchTema from "./Components/SwitchTema";

import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema(!tema)
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
