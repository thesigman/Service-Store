import Link from "next/link";
import { BlockPicker } from 'react-color';
import Toggle from "react-toggle";
import "react-toggle/style.css";
import AdminLayout from "../adminLayout";


const home = () => {

  return (
    <AdminLayout>
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
              Ρύθμιση Αρχικής Σελίδας
            </li>
          </ol>
        </nav>
      </div>
      <h3>Γενικές Ρυθμίσεις</h3>
      <div className="card-body overflow-auto">
        <table className="table table-hover align-middle">
          <tbody>
            <tr key="1">
              <td>Να Επιτρέπεται η μετακίνση καρτών</td>
              <td>
                <Toggle
                  id='cheese-status'
                  defaultChecked={false}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Kanban Σελίδας Παρόχου</h3>
      <div className="card-body overflow-auto">
        <table className="table table-hover align-middle">
          <tbody>
            <tr key="1">
              <td>kanban1</td>
              <td><input type='text' value={'Εκκρεμή Αιτήματα'}></input></td>
              <td> <BlockPicker />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )

}


export default home;