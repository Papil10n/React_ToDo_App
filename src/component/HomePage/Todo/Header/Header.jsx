import "./Header.scss";

const Header = ({settingWatchingCategory}) => {
    return (<>
        <div className="app__head">
            <button onClick={() => {
                settingWatchingCategory(null)
            }} className='app__backBtn'/>
            <h1 className="title">All Tasks</h1>
        </div>
    </>)
}


export default Header;