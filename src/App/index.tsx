import { AsideBar } from "../components/AsideBar";
import { Radio } from "../components/Radio";
import { GlobalStyles } from "../styles/global";
import { AppContainer, AppContent } from "./styles";

export function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <AppContent>
          <AsideBar />
          <Radio />
        </AppContent>
      </AppContainer>
    </>
  )
}