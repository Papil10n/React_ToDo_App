const validate = {
    name: (name, length) => {
        return name.length < length  && name.length !== 0 && isNaN(+name);
    },
}

export const transform = {
    successedName: (name) => {
        name = name.trim();
        return `${name[0].toUpperCase()}${name.slice(1)}`;
    },
    error: (name, length) => {
        if (!name) {return 'The field cannot be empty'}
        if (!isNaN(+name)) {return 'The field cannot contain only numbers'}
        if (name.length > length) {return `Name must not exceed ${length} characters`}
    }
}


export default validate;
