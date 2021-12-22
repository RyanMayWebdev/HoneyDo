
const Header = (props)=> {
    return (
        <header>
            <div>
                <h1>Honey-Do</h1>
                <img src="/images/melon.png" alt="Honey dew melon icon"/>
            </div>
            {props.loggedIn ? <button>Logout</button> : null }
        </header>
    );
};

export default Header;