import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
