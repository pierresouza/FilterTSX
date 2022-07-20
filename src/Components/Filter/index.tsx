import React, { useState } from "react";

import { Container, AreaSearch, InputSearch, SelectSearch, Item, Content } from "./styles";
import { produtos } from "./mock";

export const Filter = () => {
  const [products, setProducts] = useState(""); // estado do input
  const [selectedItems, setSelectedItems] = useState(""); // estado do primeiro select
  const [selectedcolor, setSelectedColor] = useState(""); // estado do segundo select

  const inputNome = produtos.Items.filter((produtos) =>
    produtos.nome.toLowerCase().includes(products.toLowerCase())
  ); // filtro aplicável no input
  const selectNome = produtos.Items.filter((produtis) =>
    produtis.nome.toLowerCase().includes(selectedItems.toLowerCase())
  ); // filtro aplicável no primeiro select

  const selectcor = produtos.Items.filter((produt) =>
    produt.cor.toLowerCase().includes(selectedcolor.toLowerCase())
  ); // filtro aplicável  no segundo select
  return (
    <Container>
      <AreaSearch>
        <InputSearch>
          <input type="text" value={products} onChange={(e) => setProducts(e.target.value)} />
          {/* o input acima realiza a filtragem de acordo com oque é digitado 
       no input
       */}
        </InputSearch>
        <SelectSearch>
          <select value={selectedItems} onChange={(e) => setSelectedItems(e.target.value)}>
            <option value="" disabled selected>
              Escolha um item
            </option>
            <option value="Bola">Bola</option>
            <option value="Bola de basquete">Bola de basquete</option>
            <option value="Capacete">Capacete</option>
            <option value="Camiseta">Camiseta</option>
            <option value="Tênis">Tênis</option>
            <option value="Sapato">Sapato</option>
            <option value="bicicleta">bicicleta</option>
            <option value="moto">moto</option>
            <option value="carro">carro</option>
          </select>
          {/* o select acima é o primeiro select e realiza a filtragem
          dos itens pelo valor de seus nomes
          */}
          <select value={selectedcolor} onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="" disabled selected>
              Escolha uma cor
            </option>
            <option value="Verde">Verde</option>
            <option value="vermelho">vermelho</option>
            <option value="azul">azul</option>
            <option value="branco">branco</option>
            <option value="preto">preto</option>
            <option value="violeta">violeta</option>
            <option value="ciano">ciano</option>
          </select>
          {/* o select acima é o segundo select e realiza a filtragem
          dos itens pelo valor de suas cores
          */}
        </SelectSearch>
      </AreaSearch>
      <Content>
        {inputNome.map(({ nome, id, categoria, tamanho, cor }) => (
          <Item key={id}>
            <div>
              <strong>item: {nome}</strong>
              <p>categoria: {categoria}</p>
              <p>tamanho: {tamanho}</p>
              <p>cor: {cor}</p>
            </div>
          </Item>
        ))}
      </Content>
    </Container>
  );
};
