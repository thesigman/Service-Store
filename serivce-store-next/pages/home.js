import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '../components/Navigation/navigation'
import MessageCard from '../components/Card/messageCard'
import Card from '../components/Card/card'
import TaskCard from '../components/Card/taskCard';
import AdminBar from '../components/AdminBar/adminBar'
import Layout from '../components/Layout/layout'
import { useState, useEffect } from 'react'
import Kanban from '../components/Kanban/kanban'
import Search from '../components/Search/search'
import Selector from '../components/Selector/selector'
export default function Home(props) {
 
  const changeDefaultView = (event, event2, event3) => {
    setView(event2);
  }

  const [view, setView] = useState("Καρτέλες ως πελάτης");

  return (
    <Layout user={props}>
      {!props.isAuthenticated && <p>You have to login First</p> ||
        <div className="row">
          <div className="row mt-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Αρχική</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
            <div className="col-2 mt-4">
              <Search></Search>
            </div>
            <div className="col-2 mb-4">
              <Selector onChange={changeDefaultView}  placeholder="Προεπιλεγμένη εμφάνιση" values={["Καρτέλες ως πελάτης", "Καρτέλες ώς πάροχος"]} ></Selector>
            </div>
          </div>
          <Kanban view={view}></Kanban>
        </div>
      }

    </Layout>

  )
}
