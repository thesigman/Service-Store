import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { devteam2, instance } from '../../api/axiosConfiguration';
import AdminLayout from '../adminLayout';

const offers = () => {

  // Items
  const [offers, setOffers] = useState();
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


  const paginationComponentOptions = {
    rowsPerPageText: 'Εμφάνιση Κατά',
    rangeSeparatorText: 'από',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Προσφορές',
    noRowsPerPage: 20
  };

  useEffect(async () => {
    const formatedOffers = [];

    const remoteOffers = await devteam2.get('/offers');

    for (const offer of remoteOffers.data) {
      let client = null;
      let provider = null;
      try {
        provider = await instance.get(`/providers/${offer.provider}`);

      } catch (err) {
        console.error(err)
      } finally { }

      formatedOffers.push({
        id: offer._id,
        summary: offer.Summary,
        description: offer.Description,
        cost: offer.Cost,
        status: offer.Status,
        date: moment(offer.Created).format("DD/MM/YYYY"),
        provider: provider.data,
        request: offer.requestId
      });
    }

    console.log(formatedOffers);
    const columns = [
      { name: 'Αναγνωριστικό', selector: row => row.id, sortable: true },
      { name: 'Περιγραφή', selector: row => row.description, sortable: true },
      { name: 'Περίληψη', selector: row => row.summary, sortable: true },
      { name: 'Κόστος', selector: row => row.cost, sortable: true },
      //{ name: 'Status', selector: row => row.status, sortable: true },
      { name: 'Δημιουργήθηκε', selector: row => row.date, sortable: true },
      {
        name: 'Πάροχος', key: 'client', text: 'Πελάτης', sortable: false,
        cell: (record) => {
          return (
            <Popup trigger={<label>{record.provider.NameOfCompany}</label>} position="top center">
              <div className='d-flex justify-content between'>
                ΑΦΜ:  {record.provider.AFM}
              </div>
              <div className='d-flex justify-content between'>
                ΔΟΥ: {record.provider.DOY}
              </div>
              <div className='d-flex justify-content between'>
                ΤΗΛ: {record.provider.Phone}
              </div>
            </Popup>
          )
        }
      }
    ];
    setColumns(columns);
    setOffers(formatedOffers);
    setFilteredOptions(formatedOffers);
    setPending(false);
  }, []);

  const filterRequests = (placeholder = null, value, label = null) => {

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
                Προσφορές
              </li>
            </ol>
          </nav>
        </div>
        <div className="row  mb-4">
        </div>
        <DataTable
          title="Προσφορές"
          columns={columns}
          data={filteredOptions}
          pagination
          progressPending={pending}
          paginationComponentOptions={paginationComponentOptions}

        />
      </div>
    </AdminLayout>
  )
}

export default offers;