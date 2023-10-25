import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import MoviesList from './components/movies/MoviesList';
import MoviesDetails from './components/movies/MoviesDetails';
import Tv from './components/tv/Tv';
import NotFoundPage from './components/notFound/NotFoundPage';
import Navbar from './components/navbar/NavBar';
import Pages from './components/pages/Pages';
import Footer from './components/footer/Footer';
import Celebs from './components/celebs/Celebs';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<MoviesList />}></Route>
        <Route path='/page' element={<Pages />}></Route>
        <Route path='/movie-details/:type/:id' element={<MoviesDetails />}></Route>
        <Route path='/tv' element={<Tv />}></Route>
        <Route path='/celebs' element={<Celebs />}></Route>
        <Route path='*' element={<NotFoundPage />} /> </Routes>
        {/* <Footer /> */}
    </Router>
  );
}
export default App;
