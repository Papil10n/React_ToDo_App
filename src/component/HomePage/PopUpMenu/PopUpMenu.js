import "./PopUpMenu.scss";

const PopUpMenu = ({settingLocalName, setNameToBLL, setToMountPopUp}) => {

    return (
        <div className="PopUp">
            <div className="PopUp__container">
                <div className="PopUp__top">
                    <button onClick={() => {
                        setToMountPopUp(false)
                    }} className="PopUp__backBtn"></button>
                    <div className="PopUp__text">Set your nickname for this Todo App</div>
                </div>
                <div className="PopUp__input">
                    <input type="text" onInput={(e) => {
                        settingLocalName(e)
                    }} placeholder="nickname"/>
                </div>
                <div className="PopUp__submitBtn">
                    <button onClick={()=>{setNameToBLL()}}>Complete</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpMenu;