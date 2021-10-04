import React from 'react'
import { useSelector } from 'react-redux'
import AddUser from './AddUser';
import User from './User'
import { useEffect, useState } from 'react';
import axios from "axios";

const UserList = () => {

    let state = useSelector(state => state.postReducer);
    const [data, setData] = useState([]);


    return (
        <>
            <div className="container">
                <div className="row gap-3 mt-4">
                    {state.users.map((user) => (

                        <div className="col">
                            <User user={user} key={user.id}/>
                        </div>

                    ))}
                </div>
            </div>

            <AddUser data={data}/>
        </>
    )
}

export default UserList
