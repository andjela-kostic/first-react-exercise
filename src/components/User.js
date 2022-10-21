import { useEffect, useState } from 'react';
import React from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "../axios";
import './User.css';
import Repo from './ui/Repo';
import {FaArrowCircleLeft, FaGithub} from "react-icons/fa";


const User = () => {

    const {login} = useParams();

    const [userInfo , setUserInfo] = useState({});

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchUserInformation = async () => {
            try{
                const response = await Promise.all([
                    axios.get(`/users/${login}`),
                    axios.get(`/users/${login}/repos`)
                ]);
                setUserInfo(response[0].data);
                setRepos(response[1].data);
            } catch{
                console.log("error")
            }
        };
        fetchUserInformation();
    }, []);

    return(
     
        <div className="container">
               <h1 className='headline'>USER INF<FaGithub style={{marginRight: "6px" ,paddingTop:"5px", color: "#9c67ab"}}/>RMATI<FaGithub style={{marginRight: "6px" ,paddingTop:"5px", color: "#9c67ab"}}/>N</h1>
           
      <div className="user-information">
      <div className="back">
                <Link to="/" >
                    <FaArrowCircleLeft style={{fontSize:"50px" , color: "#ffff"}}/>
                </Link>
            </div>
        <div className="user-content">
        
            <img src={userInfo?.avatar_url} />

            <div className="user-content_more">
                <h3>{userInfo?.name}</h3>
                <p>{userInfo?.bio}</p>
                <div className="more-data">
                    <p>
                    {userInfo?.followers} Followers. Following {userInfo?.following}
                    </p>
                    {userInfo?.location && (
                    <p>
                        {userInfo?.location}
                    </p>
                    )}
                    {userInfo?.blog && (
                    <p>
                        {userInfo?.blog}
                    </p>
                    )}
                    <p>
                    <a href={userInfo?.html_url}>View GitHub Profile</a>
                    </p>
                </div>
            </div>
        </div>
    <div className="user-repos">
        <h2>Repositories</h2>
            {repos ? (
            repos.map((repo) => {
                return <Repo repo={repo} key={repo.id} />;
            })
            ) : (
            <h2>No repos for this user...</h2>
            )}
        </div>
       
      </div>
      
    </div>
    )
}
export default User;