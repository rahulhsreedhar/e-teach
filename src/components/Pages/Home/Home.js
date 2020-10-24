import React from "react";
import './Home.css'
import Button from '@material-ui/core/Button';

const Home = () => {
    // window.onscroll = function () {
    //     const l = document.getElementById("test");
    //     console.log(l.getBoundingClientRect().y);
    //     if (l.getBoundingClientRect().y < 685) {
    //         l.classList.add('test2')
    //     }
    //     if (l.getBoundingClientRect().y > 685) {
    //         if (l.classList.contains('test2')) {
    //             l.classList.remove('test2')
    //         }
    //     }


    // };

    const myFunction = () => {
    }
    return (
        <div className="home" onScroll={myFunction}>

            <section className="intro">
                <div className="intro_left">
                    <div className="site-name">AIA Studies- Aim to Include All</div>
                    <div className="live-text">Online 1-on-1 LIVE Tuition</div>
                    <div className="live-desc">Need-based one-on-one live online
                    tuition classes for all subjects
                    from experienced online tutors.</div>
                </div>
                <div className="intro_right">
                    <div className="image">
                    </div>

                </div>

            </section>
            <section className="banner">

                <span>     Avail our online tuition from great tutors</span>
                <Button variant="contained">Avail now</Button>

            </section>
            <section className="quotes"></section>
        </div>

    )
}




export default Home;