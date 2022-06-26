import React, { useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routes from './Components/RoutesPage';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'dark': ""}>
            <div className='bg-gray-100 dark:bg-gray-900 min-h-screen dark:text-white'>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Routes/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
