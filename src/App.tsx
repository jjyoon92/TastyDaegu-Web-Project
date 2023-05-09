import React from 'react';
import './App.css';

import Header from './components/Header';
import PostSearch from './components/PostSearch'
import MainMenu from "./components/MainMenu";
import CategoryMenu from "./components/CategoryMenu";
import AreaMenu from "./components/AreaMenu";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="App">
                <Header/>
                <PostSearch/>
                <AreaMenu />
                <CategoryMenu />
                <MainMenu />
                <Footer />
        </div>
    );
}

export default App;
