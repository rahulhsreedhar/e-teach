import { Button } from "@material-ui/core";
import React, { Component } from "react";
import fire from '../../../fire';
import './Subjects.css';
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
            filteredTutors: []
        }
    }
    fetchSubjectList = () => {
        this.props.loader(true);

        this.unsub1 = this.database.ref('subjectList').on('value', (snapshot) => {
            this.setState({ subjectList: snapshot.val() });
            this.props.loader(false);

        })
    }


    fetchclassesList = () => {
        this.props.loader(true);
        this.unsub2 = this.database.ref('classes').on('value', (snapshot) => {
            this.setState({ classList: snapshot.val() });
            this.props.loader(false);

        });
    }
    componentDidMount() {
        this.fetchSubjectList();
        this.fetchclassesList();
        this.getTutors();
    }
    getTutors() {
        this.database.ref('/tutors').on('value', (snapshot) => {
            this.setState({ tutorList: snapshot.val() });
        });
    }

    findMyTutor() {
        const l = this.state.tutorList.filter(tut => {
            if (tut.subject.includes(this.state.selectedSub)
                && tut.classes.includes(this.state.selectedClass)) {

                return tut;
            }
        })
        this.setState({
            filteredTutors: l
        });

    }
    render() {
        return (
            <>
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
                    <Button disabled={!(this.state.selectedSub && this.state.selectedClass)} onClick={() => this.findMyTutor()}>Search</Button>
                    {!(this.state.selectedSub && this.state.selectedClass) ?
                        <span>Select Subject and Class</span> : ''}
                    <section className="tutor-list">
                        {this.state.filteredTutors.map((tut, index) => {
                            return <div className="row" key={index}>
                                <div className="image">
                                    <img alt="tutor image" src={tut.photo}></img>
                                </div>
                                <div className="contents">

                                    {tut.name}
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