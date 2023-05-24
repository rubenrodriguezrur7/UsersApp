import "./UserList.css";

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  if (!users.length) return <p className="info">Without users</p>;
  
  return (
    <ul className="user_card_container">
      {users.map((user) => (
        <li key={user.id}>
          <article className="user_card">
            <h2>{user.first_name} {user.last_name}</h2>

            <h3>Email</h3>
            <p>{user.email}</p>

            <h3>Birthday</h3>
            <p>{user.birthday}</p>

            <div>
              <button className="btn_delete" onClick={() => onDeleteUser(user.id)}></button>
              <button className="btn_edit" onClick={() => onEditUser(user)}></button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default UserList;