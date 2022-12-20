const validate = {
    taskName: (task) => {
        let result;
        result = task ?
            isNaN(+task) ?
                task.trim().length <= 18 : false
            : false;
        return result;
    },
    categoryName: (category) => {
        return category.length < 14  && category.length !== 0 && isNaN(+category);
    }
}
export const transformSuccessedName = (name) => {
    name = name.trim();
    return `${name[0].toUpperCase()}${name.slice(1)}`;
}



export default validate;
