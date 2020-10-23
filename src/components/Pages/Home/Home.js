import React from "react";
import Grid from '@material-ui/core/Grid';
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <Grid container>
                <Grid item xs={12} sm={6} className="main-content">
                    <div className="main-text-wrapper">
                        <div className="live-text">Online 1-on-1 LIVE Tuition</div>
                        <div className="live-desc">Need-based one-on-one live online
                        tuition classes for all subjects
                    from experienced online tutors.</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src="https://sportworldschool.com/wp-content/uploads/2020/09/teaching-support.jpg" width="500px" height="350px" />
                </Grid>
            </Grid>
        </div>
    )
}




export default Home;