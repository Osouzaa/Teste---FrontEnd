import styled from "styled-components";

export const RadioContainer = styled.div`
  width: 100%;
  background-color: #2E2E2E;
  padding: 1.25rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: #FFFFFF;
`;

export const RadioHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #AAAAAA;
`;

export const RadioContent = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #1E1E1E;
  border-radius: 6px;
  padding: 1rem;
`;

export const RadioItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #3E3E3E;
`;

export const RadioItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RadioName = styled.span `
  font-weight: 400;
  font-size: 0.875rem;

`