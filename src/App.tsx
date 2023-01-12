import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Router from "./Router";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
