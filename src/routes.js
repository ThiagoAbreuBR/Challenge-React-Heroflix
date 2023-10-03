import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "componentes/DefaultPage";
import Home from "componentes/pages/Home";
import NewTrailer from "componentes/pages/NewTrailer";
import NewCategoria from "componentes/pages/NewPublisher"
import NotFound from "componentes/pages/NotFound";
import EditMovie from "componentes/pages/EditMovie";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}></Route>
          <Route path="novotrailer" element={<NewTrailer />}></Route>
          <Route path="novaeditora" element={<NewCategoria />}></Route>
          <Route path="/editarfilme/:movieId" element={<EditMovie />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;