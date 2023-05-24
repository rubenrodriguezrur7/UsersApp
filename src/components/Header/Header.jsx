import "./Header.css";

const Header = ({ onCreate }) => {
    return (
        <header className="header">
            <h1>Users</h1>
            <button className="btn_form" onClick={() => onCreate()}>+ Create New User</button>
        </header>
    );
};

export default Header;