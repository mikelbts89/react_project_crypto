import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Routing from "./Components/LayoutArea/Routing/Routing";
import Menu from "./Components/LayoutArea/Menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/LayoutArea/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Route exect path="/:name">
            <Header />
          </Route>
        </header>
        <aside>
          <Menu />
        </aside>
        <main>
          <Routing />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
