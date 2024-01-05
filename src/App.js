import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import Category from "./components/Category";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ThemeContext} from "./provider/ThemeContext";
import {useState} from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <BrowserRouter>
        <div className="App" id={theme}>
          <div className="mx-auto max-w-5xl min-h-screen px-4 lg:px-8">
            <Header />
            <Search />
            <Category />
            <Pages />
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
