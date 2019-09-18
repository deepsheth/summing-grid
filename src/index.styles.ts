import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  border: 1px solid black;

  @media (min-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 720px) {
    grid-template-columns: ${props => `repeat(${props.maxColumns}, 1fr)`};
  }
`;

export const Input = styled.input`
  font-size: 1.5em;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  text-align: right;
  color: ${props => (props.hasError ? "mediumvioletred" : "#333333")};
  padding: 4px 8px;
  min-width: 100px;
`;

export const SumInput = styled(Input)`
  color: mediumspringgreen;
`;
