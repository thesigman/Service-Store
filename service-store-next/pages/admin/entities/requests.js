import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import Selector from '../../../components/Selector/selector';
import { devteam2, instance } from '../../api/axiosConfiguration';
import AdminLayout from '../adminLayout';
import EditRequest from '../forms/editRequest';

const requests = () => {

  // Items
  const [requests, setRequests] = useState();
  const [columns, setColumns] = useState();
  const [pending, setPending] = useState(true);
  const [filteredOptions, setFilteredOptions] = useState();

  // Filters 
  const [domainFilter, setDomainFilter] = useState();
  const [service1Filter, setService1Filter] = useState();
  const [service2Filter, setService2Filter] = useState();
  const [company, setCompany] = useState();

  // Filter Options
  const [domain2Options, setDomain2Options] = useState();
  const [service12Options, setService12Options] = useState();
  const [service22Options, setService22Options] = useState();
  const [company2Options, setCompany2Options] = useState();

  //Modal
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

  useEffect(async () => {
    const formatedRequests = [];
    let company2Options = [{ label: "Όλα", value: 'all' }];

    const remoteRequests = await devteam2.get('/requests');

    for (const request of remoteRequests.data) {
      let user = null;
      if (typeof request.requester != 'undefined') {
        user = await instance.get(`/clients/${request.requester}`);
        company2Options = [...company2Options, {
          label: user.data.NameOfCompany,
          value: user.data.NameOfCompany
        }];
      }

      formatedRequests.push({
        id: request._id,
        user: (user != null)
          ? user.data.NameOfCompany
          : 'Δεν έχει χρήστη',
        domain: request.domain,
        service_1: request.service_1,
        service_2: request.service_2,
        date: (typeof request.created != 'undefined')
          ? moment(request.created).format("DD/MM/YYYY")
          : null
      });
    }

    const columns = [
      { name: 'Αναγνωριστικό', selector: row => row.id, sortable: true },
      { name: 'Εταιρεία', selector: row => row.user, sortable: true },
      { name: 'Τομέας', selector: row => row.domain, sortable: true },
      { name: 'Service 1', selector: row => row.service_1, sortable: true },
      { name: 'Service 2', selector: row => row.service_2, sortable: true },
      { name: 'Δημιουργήθηκε', selector: row => row.date, sortable: true },
      {
        name: 'Ενέργειες', key: 'edit', text: 'edit', sortable: false,
        cell: (record) => {
          return (
            <button type="button" className="btn bg-transparent no-b btn-small p-2" onClick={() => prepareModal(record)}>
              <FontAwesomeIcon style={{ color: "#1f6100" }} icon={faEdit} />
            </button>
          )
        }
      }
    ];

    // Initialize Των φίλτρων
    const allServices = await instance.get('/services');
    let tempService1 = [{ label: "Όλα", value: 'all' }];
    let tempService2 = [{ label: "Όλα", value: 'all' }];
    let tempDomains = [{ label: "Όλα", value: 'all' }];

    allServices.data.forEach((value) => {
      tempDomains = [...tempDomains, { 'label': value.domain, value: value.domain }];
      tempService1 = [...tempService1, { 'label': value.service_1, value: value.service_1 }];
      tempService2 = [...tempService2, { 'label': value.service_2, value: value.service_2 }];
    })


    setService12Options([...new Map(tempService1.map(item => [item.label, item])).values()]);
    setService22Options([...new Map(tempService2.map(item => [item.label, item])).values()]);
    setDomain2Options([...new Map(tempDomains.map(item => [item.label, item])).values()]);
    setCompany2Options([...new Map(company2Options.map(item => [item.label, item])).values()]);

    setColumns(columns);
    setRequests(formatedRequests);
    setFilteredOptions(formatedRequests);
    setPending(false);
  }, []);

  const prepareModal = (record) => {
    console.log(record);
    setModalContent(
      <EditRequest
        record="record"
      />
    )
    setModalStatus(true);
  }

  const filterRequests = (placeholder = null, value, label = null) => {
    console.log(value);
    let filterRequests = requests;
    if (value != 'all') {
      switch (placeholder) {
        case 'Τομέας':
          setDomainFilter(value)
          filterRequests = filterRequests.filter(req => req.domain == value);
          break;
        case 'Service 1':
          setService1Filter(value)
          filterRequests = filterRequests.filter(req => req.service_1 == value);
          break;
        case 'Service 2':
          setService2Filter(value)
          filterRequests = filterRequests.filter(req => req.service_2 == value);
          break;
        case 'Εταιρεία':
          setService2Filter(value)
          filterRequests = filterRequests.filter(req => req.user == value);
          break;
      }
    } else {
      filterRequests = requests;
    }
    setFilteredOptions(filterRequests)
  }

  const closeModal = () => {
    setModalStatus(false);
  }

  return (
    <AdminLayout>
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
                Αιτήματα
              </li>
            </ol>
          </nav>
        </div>
        <div className="row  mb-4">
          <div className='col-md-3'>
            <Selector select2ready={true} hasCleanView={true} onChange={filterRequests} placeholder="Τομέας" values={domain2Options} ></Selector>
          </div>
          <div className='col-md-3'>
            <Selector select2ready={true} hasCleanView={true} onChange={filterRequests} placeholder="Service 1" values={service12Options} ></Selector>
          </div>
          <div className='col-md-3'>
            <Selector select2ready={true} hasCleanView={true} onChange={filterRequests} placeholder="Service 2" values={service22Options} ></Selector>
          </div>
          <div className='col-md-3'>
            <Selector select2ready={true} onChange={filterRequests} placeholder="Εταιρεία" values={company2Options} ></Selector>
          </div>
        </div>
        <DataTable
          title="Αιτήματα"
          columns={columns}
          data={filteredOptions}
          pagination
          progressPending={pending}
          paginationComponentOptions={paginationComponentOptions}
        />
        <Modal isOpen={modalStatus} style={modalStyle} ariaHideApp={false}>
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col">
                <h5>Επεξεργασία Request</h5>
              </div>
              <button className="btn-close" onClick={closeModal}></button>
            </div>
          </div>
          {modalContent}
        </Modal>
      </div>
    </AdminLayout>
  )
}

export default requests;