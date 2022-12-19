import "./PopUpMenu.scss";
import {useState} from "react";

const PopUpMenu = (props) => {
    let [name, setName] = useState("");

    const settingNickName = (text) => {
        setName(text.trim());
    }
    const setNameToBLL = () => {
        props.setNewUserName(name);
        props.setToMountPopUp(false);
    }

    return (
        <div className="PopUp">
            <div className="PopUp__container">
                <div className="PopUp__top">
                    <button onClick={()=>{props.setToMountPopUp(false)}} className="PopUp__backBtn"></button>
                    <div className="PopUp__text">Set your nickname for this Todo App</div>
                </div>
                <div className="PopUp__input">
                    <input type="text" onInput={(e)=>{settingNickName(e.target.value)}} placeholder="nickname"/>
                </div>
                <div className="PopUp__submitBtn">
                    <button onClick={()=>setNameToBLL()}>Complete</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpMenu;