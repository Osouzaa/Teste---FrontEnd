import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem; 
  position: relative;
`;

export const AppContent = styled.div`
  max-width: 90rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem; 
  background-color: #282828;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

`;
