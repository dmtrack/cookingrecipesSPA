import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PageNotFound } from "./pages/PageNotFound";
import { Movie } from "./components/Movie";

function App() {
  const data = { name: "dmtrack", age: 36 };
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home props={data} />} />

            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
