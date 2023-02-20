import './App.css';
import {Route, Routes} from "react-router-dom";
import {HelloPage} from "./pages/helloPage/helloPage";
import {MainPage} from "./pages/mainPage/mainPage";
import {MoviesPage} from "./pages/moviesPage/moviesPage";
import {TvsPage} from "./pages/tvsPages/tvsPage";

function App() {
  return (<Routes>
        <Route path={'/'} element={<HelloPage/>}/>
        <Route path={'/main'} element={<MainPage/>}/>
        <Route path={'/movies'} element={<MoviesPage/>}/>
        <Route path={'/tvs'} element={<TvsPage/>}/>
      </Routes>);
}

export default App;
