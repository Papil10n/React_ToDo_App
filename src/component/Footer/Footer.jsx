import "./Footer.scss";

const Footer = (props) => {
    return (<>
        <div className="app__create">
            <div className="app__create__wrap">
                <div className="app_name">My List</div>
                <button onClick={()=>{console.log('add')}} className="app__add__btn" />
            </div>
        </div>
    </>)
}

export default Footer;