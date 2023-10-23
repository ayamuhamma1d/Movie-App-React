import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import MoviesList from './components/movies/MoviesList';
import MoviesDetails from './components/movies/MoviesDetails';
import Tv from './components/tv/Tv';
import TvDetails from './components/tv/TvDetails';
import NotFoundPage from './components/notFound/NotFoundPage';
function App() {
  return (
    <Router>
    <div className="App">
     <NavBar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movies' element={<MoviesList/>}></Route>
      <Route path='/movies/:id' element={<MoviesDetails/>}></Route>
      <Route path='/tv' element={<Tv/>}></Route>
      <Route path='/tv/:id' element={<TvDetails/>}></Route>
      <Route path='*' element={<NotFoundPage />} /> </Routes>
    </Router>
  );
}
export default App;
