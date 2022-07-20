import React from "react";
import { Filter } from "./Components/Filter";
import { CenterText } from "./Style/container/style";
import { GlobalStyle } from "./Style/GlobalStyle";

export function App() {
  return (
    <>
      <CenterText>
        <h1>Filter aplicado em input e select</h1>
      </CenterText>
      <Filter />
      <GlobalStyle />
    </>
  );
}
