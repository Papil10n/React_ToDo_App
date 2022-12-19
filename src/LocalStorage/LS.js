// categoryes
export const showCategoryes = () => {
    return JSON.parse(localStorage.getItem('categoryes'));
}

export const setCategory = (category) => {
    let categoryes = JSON.parse(localStorage.getItem('categoryes'));

    const newCategoryObj = {
        name: category,
        tasks: {
            today: [],
            tomorrow: [],
            all: [
                {message: 'test', time: '04/12/2022', isDone: false},
            ],
        }
    }

    categoryes !== null ? categoryes.push(newCategoryObj) : categoryes = [newCategoryObj];

    localStorage.setItem('categoryes', JSON.stringify(categoryes));

    return newCategoryObj;
}
export const findAndDeleteCategory = (name) => {
    let categoryes = JSON.parse(localStorage.getItem('categoryes'));

    let setCategoryIndex = categoryes.indexOf(categoryes.find(i => i.name === name));
    categoryes.splice(setCategoryIndex, 1);

    localStorage.setItem('categoryes', JSON.stringify(categoryes));

    return categoryes;
}

export const taskModeRefresh = (categoryes, aName, aMode, aMessage) => {

    let newCategoryes =  categoryes.map(c => {
        if (c.name === aName) {
            c.tasks[aMode].map(task => {
                if (task.message === aMessage) {
                    task.isDone = !task.isDone;
                }
            })
        }
        return c
    });

    localStorage.setItem('categoryes', JSON.stringify(newCategoryes));
    return newCategoryes;
}
