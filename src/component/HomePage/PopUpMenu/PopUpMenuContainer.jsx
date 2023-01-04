import PopUpMenu from "./PopUpMenu";
import {useState} from "react";
import {connect} from "react-redux";
import {setNewUserName, setToMountPopUp} from "../../../redux/task-reducer";
import validate, {transform} from "../../../Validators/Validate";

const PopUpMenuContainer = ({setToMountPopUp, setNewUserName}) => {

    let [localName, setLocalName] = useState("");

    const settingLocalName = (text) => {
        setLocalName(text.target.value.trim());
    }
    const setNameToBLL = () => {
        if (validate.name(localName, 12)) {
            setNewUserName(transform.successedName(localName));
            setToMountPopUp(false);
        } else {
            alert('Not a valid nickname!')
        }
    }

    return <PopUpMenu settingLocalName={settingLocalName} setNameToBLL={setNameToBLL} setToMountPopUp={setToMountPopUp}/>
}



const mstp = () => {
    return {}
}

export default connect(mstp, {setToMountPopUp, setNewUserName})(PopUpMenuContainer);