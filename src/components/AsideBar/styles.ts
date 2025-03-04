import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 250px;
  height: 100%;
  background-color: #1E1E1E;
  color: #FFF;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
`;

export const InputFilter = styled.input`
  padding: .6rem;
  border-radius: 6px;
  border: none;
  background-color: #282828;
  color: #FFF;
  outline: none;
`

export const ListStyles = styled.ul `
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: .75rem;

  li {
    padding: .6rem;
    background-color: #282828;
    border-radius: 6px;
    color: #FFF;
    font-size: .875rem;
  }
`
