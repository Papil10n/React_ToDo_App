const validate = {
    taskName: (task) => {
        return task.length < 50  && task.length !== 0 && isNaN(+task);
    },
    categoryName: (category) => {
        return category.length < 18  && category.length !== 0 && isNaN(+category);
    }
}
export const transformSuccessedName = (name) => {
    name = name.trim();
    return `${name[0].toUpperCase()}${name.slice(1)}`;
}



export default validate;
