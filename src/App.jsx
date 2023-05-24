import { useEffect, useState } from 'react'
import { getAllUsers } from './services/getAllUser';
import { createUser } from './services/createUser';
import { deleteUser } from './services/deleteUser';
import { updateUser } from './services/updateUser';

import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import Modal from './components/Modal/Modal';
import UserForm from './components/UserForm/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);

  const loadUsers = async () => {
    const usersData = await getAllUsers();
    setUsers(usersData);
  };

  const handleCloseModal = () => {
    setEditingUserData(null);
    setIsVisibleModal(false);
  }

  const handleCreate = () => {
    setIsVisibleModal(true);
  };

  const handleSend = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await loadUsers();
    setIsVisibleModal(false);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    await loadUsers();
  };

  const handleEditUser = (dataUser) => {
    setIsVisibleModal(true);
    setEditingUserData(dataUser);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header onCreate={handleCreate} />

      <UserList users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser}/>

      <Modal isVisible={isVisibleModal}>
        <UserForm 
          onClose={handleCloseModal}
          onSend={handleSend}
          initialData={editingUserData}/>
      </Modal>
    </>
  );
}

export default App;

