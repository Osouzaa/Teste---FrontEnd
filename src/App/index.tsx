import { AsideBar } from "../components/AsideBar";
import { GlobalStyles } from "../styles/global";
import { AppContainer, AppContent } from "./styles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <AppContent>
          <AsideBar />
          <h1>Hello</h1>
        </AppContent>
      </AppContainer>
    </>
  )
}