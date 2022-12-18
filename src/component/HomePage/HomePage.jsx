import {NavLink} from "react-router-dom";
import React from "react";
import "./HomePage.scss";
import {connect} from "react-redux";
import Section from "./Section/Section";
import {setAvailableCategory, setCurrentDateWatching, setCurrentTodos} from "../../redux/task-reducer";

const HomePage = (props) => {


    let categoryes = [];

    if (props.categoryes) {
        categoryes = props.categoryes.map((s, i) => <Section key={i} name={s} />)
    }


    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__top__content'>
                    <div className='home__burger'>
                        <button onClick={() => {
                            console.log('***')
                        }}/>
                    </div>
                    <div className='home__text'>
                        <p className='home__top__hello'>Hello</p>
                        <p className='home__top__nick'>Guest</p>
                    </div>
                </div>
                <div className="home__sections">
                    {categoryes}
                </div>
                <div className='home__add__task__wrap'>
                    {categoryes.length < 10 ? <NavLink to='/new_todo' className='home__add__task'/> : null}
                </div>
            </div>
        </div>
    )
}



class HomePageContainer extends React.Component {

    componentDidMount() {
        this.props.setAvailableCategory();
    }


    render() {
        return (
            <HomePage categoryes={this.props.categoryes} />
        )
    }

}

const mstp = (state) => {
    return {
        sections: state.tasksReducer.sections,
        categoryes: state.tasksReducer.categoryes,
    }
}

export default connect(mstp, {setCurrentTodos, setCurrentDateWatching, setAvailableCategory,})(HomePageContainer);
;