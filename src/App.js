import { Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import ListMovie from "./component/Movie/ListMovie";
import Search from "./component/Search/Search";
import DetailMovie from "./component/Detailmovie/DetailMovie";
function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/movie" element={<ListMovie></ListMovie>}></Route>
                <Route path="/movie/:slug" element={<ListMovie></ListMovie>}></Route>
                <Route path="/search/:slug" element={<Search></Search>}></Route>
                <Route path="/detail/:slug" element={<DetailMovie></DetailMovie>}></Route>
                <Route path="*" element="404"></Route>
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
