const validate = {
    todoName: (name) => {
        for (let char of name) {
            if (char !== String(char)) return false;
        }
        return name.length < 14  && name.length !== 0
    },
    taskName: (name) => {

    },
    taskDate: (date) => {

    }

}

export default validate;