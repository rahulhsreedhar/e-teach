import { Button } from "@material-ui/core";
import React, { Component } from "react";
import fire from '../../../fire';
import './Subjects.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

class Subjects extends Component {
    constructor(props) {
        super(props);
        this.database = this.props.database;


        this.state = {
            subjectList: [],
            selectedSub: '',
            classList: '',
            selectedClass: '',
            tutorList: [],
            filteredTutors: [],
            load: false
        }
    }
    handleLoader = (flag) => {
        this.setState({ load: flag });
    };
    fetchSubjectList = () => {
        this.handleLoader(true);

        this.database.ref('subjectList').once('value')
            .then((dataSnapshot) => {
                this.setState({ subjectList: dataSnapshot.val() });
                this.fetchclassesList();

            })
    }


    fetchclassesList = () => {
        this.database.ref('classes').once('value')
            .then((dataSnapshot) => {
                this.setState({ classList: dataSnapshot.val() });
                this.getTutors();

            });
    }
    componentDidMount() {
        this.fetchSubjectList();

    }
    getTutors() {

        this.database.ref('/tutors').once('value')
            .then((dataSnapshot) => {
                this.setState({ tutorList: dataSnapshot.val() });
                this.handleLoader(false);
            });
    }

    findMyTutor() {
        this.handleLoader(true);
        this.setState({
            filteredTutors: this.state.tutorList.filter(tut => {
                if (tut.subject.includes(this.state.selectedSub)
                    && tut.classes.includes(this.state.selectedClass)) {
                    return tut;
                }
            })
        });
      setTimeout(()=>{ this.handleLoader(false)},2000);
    }
    render() {
        return (
            <>
                <Backdrop open={this.state.load} style={{ zIndex: '5' }}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <div className="subject-page">
                    <h1>Find you tutor!!</h1>
                    <section className="select">
                        <div className="subjects">
                            <label >Select Subject </label>
                            <select
                                value={this.selectedSub}
                                onChange={e => this.setState({ selectedSub: e.target.value })}
                                style={{ width: '100%' }}
                            ><option value={''}>{'Select'}</option>
                                {this.state.subjectList ? this.state.subjectList.map((sub, index) => {
                                    return <option key={index} value={sub}>{sub.toUpperCase()}</option>

                                }) : ''}
                            </select>
                        </div>
                        <div className="standard">
                            <label >Select standard</label>
                            <select
                                value={this.selectedClass}
                                onChange={e => this.setState({ selectedClass: e.target.value })}
                                style={{ width: '100%' }}
                            ><option value={''}>{'Select'}</option>
                                {this.state.classList ? this.state.classList.map((sub, index) => {
                                    return <option key={index} value={sub}>{sub.toUpperCase()}</option>

                                }) : ''}
                            </select>
                        </div>
                    </section>
                    <Button disabled={!(this.state.selectedSub && this.state.selectedClass)}
                        onClick={() => this.findMyTutor()}>Search</Button>
                    {!(this.state.selectedSub && this.state.selectedClass) ?
                        <span>Select Subject and Class</span> : ''}
                    <section className="tutor-list">
                        {this.state.filteredTutors.map((tut, index) => {
                            return <div className="row" key={index}>
                                <div className="image">
                                    <img alt="tutor image not found" src={tut.photo}></img>
                                </div>
                                <div className="contents">

                                    {tut.name.toUpperCase()}
                                </div>
                            </div>

                        })}


                    </section>
                </div>
            </>

        )
    }
}




export default Subjects;