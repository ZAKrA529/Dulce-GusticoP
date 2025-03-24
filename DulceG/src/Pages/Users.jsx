import React from 'react'
import UserP from '../Components/Features/User/UserPage/UserP/UserP'
import UserProfile from '../Components/Features/User/UsersSection/UserProfilePhoto'
import NavigationBar from '../Components/Landing/NavbarL/Navbar'


function Users() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <UserP></UserP>
            <UserProfile></UserProfile>
        </div>
    )
}

export default Users
