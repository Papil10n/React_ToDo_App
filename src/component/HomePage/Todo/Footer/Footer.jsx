import "./Footer.scss";

const Footer = ({changeNewTaskMode}) => {
    return (<>
        <div className="app__create">
            <div className="app__create__wrap">
                <div className="app_name">My List</div>
                <button onClick={()=>{changeNewTaskMode(true)}} className="app__add__btn" />
            </div>
        </div>
    </>)
}

export default Footer;