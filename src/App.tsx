
import "./reset.css"
import "./global_styles.css"
import Navbar from './componentes/MenuNavegacao';
import Home from './telas/Home';
import SobreMim from "./telas/SobreMim";
import Tela from "./componentes/Tela";

function App() {
  return (
    <Tela>
      <>
        <Navbar />
        <Home />
        <SobreMim />
      </>
    </Tela>
  );
}

export default App;
