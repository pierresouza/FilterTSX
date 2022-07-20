import styled from "styled-components";

export const Container = styled.div``;

export const AreaSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.div`
  margin-top: 2rem;
`;

export const SelectSearch = styled.div`
  select {
    margin: 2rem 0.75rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 0 24.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(5, 14rem);
  row-gap: 2rem;
`;
export const Item = styled.div`
  max-width: auto;
  padding: 0.5rem 0;
  margin: 0 1rem;
  border: 1px solid lightgrey;
  border-radius: 1rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #d81f0d;
    background-color: #000;
    color: #fff;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 2.5rem;
  }
`;
