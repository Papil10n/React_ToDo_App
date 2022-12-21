const Section = ({name, count, settingWatchingCategory, watchingCategoryMode, deleteCategory}) => {

    const setWatchingCategory = () => {
        settingWatchingCategory(name);
        watchingCategoryMode("all");
    }
    const clearCategory = (name) => {
        deleteCategory(name);
    }

    return (
        <div className='home__section'>
            <div>
                <div className='home__section__content'>
                    <button className="home__section__delBtn" onClick={() => clearCategory(name)}>X</button>
                    <button className="home__section__article" onClick={setWatchingCategory}>
                        <span
                            className={name.length > 13 ? 'section__title__sm' : 'section__title'}>{name}</span>
                        <span className='section__task__counter'>{count}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section;