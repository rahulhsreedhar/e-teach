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
            selectedSyllabus: '',
            syllabusList: ['state', 'cbse'],
            classList: '',
            selectedClass: '',
            tutorList: [],
            filteredTutors: [],
            load: false,
            error: false
        }
    }
    handleLoader = (flag) => {
        this.setState({ load: flag });
    };
    fetchSubjectList = () => {
        this.handleLoader(true);

        this.database.ref('school_subjectList').once('value')
            .then((dataSnapshot) => {
                this.setState({ subjectList: dataSnapshot.val() });
                this.fetchclassesList();

            })
    }


    fetchclassesList = () => {
        this.setState({
            classList: {
                5: "class 5",
                6: "class 6",
                7: "class 7",
                8: "class 8",
                9: "class 9",
                10: "class 10",
                11: "class 11",
                12: "class 12"
            }
        });
        this.getTutors();

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
        const tutorsList = this.state.tutorList.filter(tut => {
            if (tut
                .school_subjects
                .classes[this.state.selectedSyllabus][this.state.selectedClass].includes(parseInt(this.state.selectedSub)
                )) {
                return tut;
            }
        })
        this.setState({
            filteredTutors: tutorsList
        })

        if (tutorsList < 1) this.setState({ error: true })
        else this.setState({ error: false })

        setTimeout(() => { this.handleLoader(false) }, 2000);
        console.log(this.state.filteredTutors)

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
                                value={this.state.selectedSub}
                                onChange={e => {
                                    this.setState({ selectedSub: e.target.value })
                                }}
                                style={{ width: '100%' }}
                            ><option value={''}>{'Select'}</option>
                                {this.state.subjectList ? Object.keys(
                                    this.state.subjectList).map((subKey) => {
                                        return <option key={subKey} value={subKey}>{this.state.subjectList[subKey].toUpperCase()}</option>

                                    }) : ''}
                            </select>
                        </div>
                        <div className="standard">
                            <label >Select Class</label>
                            <select
                                value={this.selectedClass}
                                onChange={e => this.setState({ selectedClass: e.target.value })}
                                style={{ width: '100%' }}
                            ><option value={''}>{'Select'}</option>
                                {this.state.classList ? Object.keys(
                                    this.state.classList).map(subKey => {
                                        return <option key={subKey} value={subKey}>{this.state.classList[subKey].toUpperCase()}</option>

                                    }) : ''}
                            </select>
                        </div>
                        <div className="syllabus">
                            <label >Select Syllabus</label>
                            <select
                                value={this.state.selectedSyllabus}
                                onChange={e => this.setState({ selectedSyllabus: e.target.value })}
                                style={{ width: '100%' }}
                            ><option value={''}>{'Select'}</option>
                                {this.state.syllabusList ?
                                    this.state.syllabusList.map((syllabus, index) => {
                                        return <option key={index}
                                            value={syllabus}>
                                            {syllabus.toUpperCase()}
                                        </option>

                                    }) : ''}
                            </select>
                        </div>

                    </section>
                    <Button disabled={!(this.state.selectedSub && this.state.selectedClass && this.state.selectedSyllabus)}
                        onClick={() => this.findMyTutor()}>Search</Button>
                    {!(this.state.selectedSub && this.state.selectedClass &&   this.state.selectedSyllabus) ?
                        <span className="warning">Select Subject, Class and Syllabus</span> : ''}


                    <section className="tutor-list">
                        {this.state.filteredTutors.map((tut, index) => {
                            return <div className="row" key={index}>
                                <div className="image">
                                    <img alt="tutor image not found" src={tut.photo}></img>
                                </div>
                                <div className="contents">
                                    <div>
                                        <span className="label"> Name :</span>
                                        <span className="value">  {tut.name.toUpperCase()}</span>

                                    </div>
                                    <div>
                                        <span className="label"> Qualification :</span>
                                        <span className="value">    {tut.qualification.toUpperCase()}</span>
                                    </div>

                                </div>
                            </div>

                        })}

                        {this.state.error ?
                            <span className="warning"> Sorry Tutor Not available now for this selection. Please contact us and we will arrange tutor for you.
                           </span> : ''}

                    </section>
                </div>
            </>

        )
    }
}




export default Subjects;