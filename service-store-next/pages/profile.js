import { useEffect, useState } from "react";
import Layout from "../components/Layout/layout";
import { instance } from "./api/axiosConfiguration";
import ProfileInfo from '../components/ProfileInfo/profileInfo'


export default function Profile(props) {


  return (
    <Layout mode={props.mode} user={props}>
      <div className="vh-100">
        <ProfileInfo mode={props.mode} activeUser={props.activeUser} isAuthenticated={props.isAuthenticated} />
      </div>
    </Layout>
  );
}
