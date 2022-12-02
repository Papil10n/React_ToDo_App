import "./Navigate.scss";

const Navigate = (props) => {
    return (<>
        <nav className="app__nav">
            <ul>
                <li>Today</li>
                <li>Tomorrow</li>
                <li>Week</li>
            </ul>
        </nav>
        <div className="outline"></div>
    </>)
}

export default Navigate;