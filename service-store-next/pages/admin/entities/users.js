import { faDumpster, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import Selector from '../../../components/Selector/selector';
import { instance } from '../../api/axiosConfiguration';
import ProfileInfo from '../../../components/ProfileInfo/profileInfo';
import AdminLayout from '../adminLayout';

const users = (props) => {

  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const [columns, setColumns] = useState();
  const [pending, setPending] = useState(true);
  const [modalStatus, setModalStatus] = useState(false);
  const [modalContent, setModalContent] = useState();

  const paginationComponentOptions = {
    rowsPerPageText: 'Εμφάνιση Κατά',
    rangeSeparatorText: 'από',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Χρήστες',
    noRowsPerPage: 20
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#FFFFFF",
      width: "60%",
    },
  }

  const select2Options = [
    { label: 'Μόνο Πάροχοι', value: 'provider' },
    { label: 'Μόνο Πελάτες', value: 'client' },
    { label: 'Όλοι', value: 'all' },
  ];

  const prepareModal = (role, application_id, email, username) => {
    const active_user = {
      id: application_id,
      email: email,
      username: username,
      role: role + 's'
    }
    setModalContent(
      <ProfileInfo
        user={props.user}
        mode="admin"
        activeUser={active_user} />
    )
    setModalStatus(true);
  }


  useEffect(async () => {
    const formattedUsers = []
    const tempUsers = await instance.get('/users');
    tempUsers.data.forEach(element => {
      formattedUsers.push(
        {
          id: element._id,
          username: element.username,
          email: element.email,
          role: (typeof element.userprovider == 'undefined')
            ? 'Πελάτης'
            : 'Πάροχος',
          mashineRole: (typeof element.userprovider == 'undefined')
            ? 'client'
            : 'provider',
          application_id: (typeof element.userprovider == 'undefined')
            ? element.client._id
            : element.userprovider._id
        }
      );

      const columns = [
        { name: 'Αναγνωριστικό', selector: row => row.application_id, sortable: true, },
        { name: 'Username', selector: row => row.username, sortable: true, },
        { name: 'Email', selector: row => row.email, sortable: true, },
        { name: 'Ρόλος', selector: row => row.role, sortable: true, },
        {
          key: 'edit', text: 'edit', sortable: false,
          cell: (record) => {
            return (
              <div className='d-flex justify-content-between'>
                <button type="button" className="btn bg-transparent no-b btn-small p-2" onClick={() => prepareModal(record.mashineRole, record.application_id, record.email, record.username)}>
                  <FontAwesomeIcon style={{ color: "#1f6100" }} icon={faEdit} />
                </button>
                <button type="button" className="btn bg-transparent no-b btn-small p-2">
                  <FontAwesomeIcon style={{ color: "#ff050d" }} icon={faDumpster} />
                </button>
              </div>
            )
          }
        }
      ];

      setColumns(columns);
      setUsers(formattedUsers);
      setPending(false);
      setFilteredUsers(formattedUsers);
    });
  }, [])

  const filterUsers = (placeholder = null, value, label = null) => {
    const filteredUsers = (value != 'all')
      ? setFilteredUsers(users.filter(user => user.mashineRole == value))
      : setFilteredUsers(users);
  }

  const closeModal = () => {
    setModalStatus(false);
  }

  return (

    < AdminLayout >
      <div className='vh-100'>
        <div className="row mt-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/admin/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Χρήστες
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-2 col-13 mb-4">
          <Selector select2ready onChange={filterUsers} placeholder="Εμφάνιση" values={select2Options} ></Selector>
        </div>
        <DataTable
          title="Χρήστες"
          columns={columns}
          data={filteredUsers}
          pagination
          progressPending={pending}
          paginationComponentOptions={paginationComponentOptions}
        />
        <Modal isOpen={modalStatus} style={modalStyle} ariaHideApp={false}>
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col">
                <h5>Επεξεργασία Πληροφοριών χρήστη</h5>
              </div>
              <button className="btn-close" onClick={closeModal}></button>
            </div>
          </div>
          {modalContent}
        </Modal>
      </div>
    </AdminLayout >
  )
}

export default users;