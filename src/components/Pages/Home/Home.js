import React from "react";
import './Home.css'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import HowToRegIcon from '@material-ui/icons/HowToReg';
const Home = () => {


    const myFunction = () => {
    }
    return (
        <div className="home-container">
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

                    <span>Avail our online tuition from great tutors</span>
                    <Button variant="contained">Avail now</Button>


                </section>
 


             </div >
             <section className="advantage">
                    <Grid container spacing={3} >

                        {/* <Container style={{ width: '100%', display: 'flex', justifyContent: 'space-around', height: '100%' }}> */}
                        <Grid item xs={12} sm={4} >

                            <div className="split">
                                <PersonIcon fontSize='large'></PersonIcon>
                                <span> Trusted Services</span>

                                <span> We are group of trusted Tutors</span>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={4} >

                            <div className="split">
                                <SentimentVerySatisfiedIcon fontSize='large'></SentimentVerySatisfiedIcon>
                                <span> 24/7 Support</span>
                                <span> Whatsapp # XXXXXXXXXXXXXX</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <div className="split">
                                <HowToRegIcon fontSize='large'> </HowToRegIcon>
                                <span>   Well Experienced</span>
                                <span> Trained professionals</span>
                            </div>
                        </Grid>
                    </Grid>
                    {/* </Container> */}
                </section>
           

        </div >)
}




export default Home;