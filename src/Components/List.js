const List = (props) => {
    return (
        <div className="list">
            <div className="listTitle">
                <h2>{props.title}</h2>
                <button>+</button>
            </div>
            <ul className="listBox">
                <p>Your task go here</p>
            </ul>
        </div>
    );
};

export default List;