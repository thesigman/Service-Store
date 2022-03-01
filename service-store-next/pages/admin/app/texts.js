import Link from 'next/link';
import React from 'react';
import AdminLayout from '../adminLayout';

const texts = () => {

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
              Λεκτικά
            </li>
          </ol>
        </nav>
      </div>

    </AdminLayout>
  )
}

export default texts;