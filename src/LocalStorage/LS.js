// categoryes
export const showCategoryes = () => {
    const categoryes = JSON.parse(localStorage.getItem('categoryes'));
    if (categoryes ===  null) {
        return [];
    } else {
        return categoryes;
    }
}
export const setCategory = (category) => {
    let categoryes = JSON.parse(localStorage.getItem('categoryes'));

    const newCategoryObj = {
        name: category,
        tasks: {
            today: [],
            tomorrow: [],
            all: [

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
export const setNewTaskToLS = (categoryes, aName, aMessage, aTime) => {
    categoryes.map(item => {
        if (item.name === aName) {
            const task = {message: aMessage, time: aTime, isDone: false}

            if (item.tasks.all.length) {
                item.tasks.all = [...item.tasks.all, task]
            } else {
                item.tasks.all = [task]
            }

        }
        return item;
    })
    localStorage.setItem('categoryes', JSON.stringify(categoryes));

    return categoryes;
}
export const getNonDeletedTask = (categoryes, aName, aMode, aMessage) => {
    categoryes.map(item => {
        if (item.name === aName) {
            let delTask = item.tasks[aMode].indexOf(item.tasks[aMode].find(task => task.message === aMessage));
            item.tasks[aMode].splice(delTask, 1);
        }
    });
    localStorage.setItem('categoryes', JSON.stringify(categoryes));

    return categoryes;
}

// Username
export const saveNewUserName = (username) => {
    localStorage.setItem('username', username);
    return username;
}
export const getUserName = () => {
    let user = localStorage.getItem('username');

    if (user === null) {
        return "Guest";
    } else {
        return user;
    }
}