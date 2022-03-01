import { faDumpster, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Selector from '../../../components/Selector/selector';
import { instance } from '../../api/axiosConfiguration';
import AdminLayout from '../adminLayout';

const users = () => {

  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const [columns, setColumns] = useState();
  const [pending, setPending] = useState(true);

  const paginationComponentOptions = {
    rowsPerPageText: 'Εμφάνιση Κατά',
    rangeSeparatorText: 'από',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Χρήστες',
    noRowsPerPage: 20
  };

  const select2Options = [
    { label: 'Μόνο Πάροχοι', value: 'provider' },
    { label: 'Μόνο Πελάτες', value: 'client' },
    { label: 'Όλοι', value: 'all' },
  ];

  const prepareModal = (role, application_id) => {
    console.log(role);
    console.log(application_id);
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
                <button type="button" className="btn bg-transparent no-b btn-small p-2" onClick={() => prepareModal(record.mashineRole, record.application_id)}>
                  <FontAwesomeIcon   style={{color: "#1f6100"}} icon={faEdit} />
                </button>
                <button type="button" className="btn bg-transparent no-b btn-small p-2">
                  <FontAwesomeIcon style={{color: "#ff050d"}} icon={faDumpster} />
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

  return (

    < AdminLayout >
      <div className="row mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              {/* <a href="#">Αρχική</a> */}
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
    </AdminLayout >
  )
}

export default users;