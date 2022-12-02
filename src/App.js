import './App.scss';
import {Routes, Route} from "react-router-dom";
import Today from "./component/Today/Today";
import Header from "./component/Header/Header";
import Navigate from "./component/Navigate/Navigate";
import Footer from "./component/Footer/Footer";
import TodayContainer from "./component/Today/Today";

function App() {

    return (
        <div className="app">
            <div className="app__container">
                <div className='app__wrap'>
                    <Header/>
                    <Navigate/>
                    <div className="app__main">
                        <Routes>
                            <Route path='/today' element={<TodayContainer/>}/>
                            {/*<Route path='/tomorrow' element={<Tomorrow />} />*/}
                            {/*<Route path='/week' element={<Week />} />*/}
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
