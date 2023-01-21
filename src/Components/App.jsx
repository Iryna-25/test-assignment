import Header from "./Header/Header";
import { GlobalStyle } from "./GlobalStyle";
import Main from "./Main/Main";
import { Wrapper } from "./Wrapper.styled";


function App() {
  return (
    <Wrapper> 
      <Header/>
      <Main/>
      <GlobalStyle/>
    </Wrapper>
  );
}
export default App;
