import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./index.module.css";
/*import { Home } from "./Pages/Home/Home";
import { ItemDetail } from "./Pages/ItemDetail/ItemDetail";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Upload } from "./Pages/Upload/Upload";*/
import { Rating } from "../Components/Rating/Rating";

function App() {
  return (
   /* <Router>
      <div>
        <header>
          <div className={styles.content}>
          <div className={`${styles.headerImg} ${styles.floating}`}>
          <img
            width="350px"
            height="350px"
            src="https://cdn.jsdelivr.net/gh/andiyt/myscript/Goku404.webp"
            alt="Goku"
          />
          </div>
          <div className={styles.TextContainer}>
            <h1>La Tienda de Andi</h1>
            <p>
              Un sitio para compartir recursos que pueden ser tanto gratis como
              de paga.
            </p>
          </div>
          </div>
        </header>
      </div>
      <main>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/upload" Component={Upload}/>
        <Route path="/item/:id" Component={ItemDetail} />
        <Route path="*" Component={NotFound}/>
      </Routes>
      </main>

      <footer>
        <span>
          Desarrollado por <a href="https://github.com/andifc">@Andi</a>
        </span>
      </footer>
    </Router>*/
    <Rating id="1234" />
  );
}

export default App;
