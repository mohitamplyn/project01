import React from 'react'
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Team from './Team';
import Work from './Work';
import Prices from './Prices';
import Footer from './Footer';
import Form from './Form';
// import List from './List';
function Home(props) {
    return (
        <div id="home">
            <Header />
            <Banner />
            {/* <About /> */}
            {/* <Services /> */}
            <Team />
            <Work />
            {/* <Prices /> */}
            <Form />
            <Footer />
            {/* <List /> */}
        </div>
    );
}

export default Home;