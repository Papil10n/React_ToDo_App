import "./Navigates.scss";


const Navigates = ({watchingCategoryMode}) => {

    const setCategoryMode = (mode) => {
        watchingCategoryMode(mode);
    }

    return (<>
        <nav className="app__nav">
            <ul>
                <li>
                    <button className="app__nav__link" onClick={() => setCategoryMode('all')}>All</button>
                </li>
                <li>
                    <button className="app__nav__link" onClick={() => setCategoryMode('today')}>Today</button>
                </li>
                <li>
                    <button className="app__nav__link" onClick={() => setCategoryMode('tomorrow')}>Tomorrow</button>
                </li>
            </ul>
        </nav>
        <div className="outline"></div>
    </>)
}

export default Navigates;