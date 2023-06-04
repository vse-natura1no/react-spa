import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import NoMatch from './pages/noMatch';
import Category from './pages/category';
import Recipe from './pages/recipe';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <main className="container content">
                <Routes>
                    <Route path='*' element={<NoMatch />} />
                    <Route path='/' element={<Home />} />
                    <Route path='contact/' element={<Contact />} />
                    <Route path='about/' element={<About />} />
                    <Route path='category/:name' element={<Category />} />
                    <Route path='meal/:id' element={<Recipe />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
