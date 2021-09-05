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


export default function Home(props) {


  return (
    <Layout user={props}>
      {!props.isAuthenticated && <p>You have to login First</p> ||
        <div className="row">
          <Kanban></Kanban>
        </div>
      }

    </Layout>

  )
}
