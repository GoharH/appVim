import { Route, Routes } from 'react-router-dom';
import './assets/style/index.scss';
import Footer from './components/footer';
import Header from './components/header';
import HeaderNew from './components/header-new';
import TitleArticle from './pages/article';
import ContactUs from './pages/contact';
import Home from './pages/home';
import Organize from './pages/home/organize';
import Schedul from './pages/home/schedul';
import Tracking from './pages/home/tracking';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HeaderNew /> */}
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/terms'} element={<Terms />} />
        <Route path={'/privacy'} element={<Privacy />} />
        <Route path={'/article'} element={<TitleArticle />} />
        <Route path={'/contact'} element={<ContactUs />} />

        {/* <Route path={'/schedul'} element={<Schedul />} />
        <Route path={'/tracking'} element={<Tracking />} />
        <Route path={'/organize'} element={<Organize />} /> */}

        <Route path={'/*'} element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
