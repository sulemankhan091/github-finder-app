import React, { useContext } from 'react'
import Spinner from '../layout/spinner';
import UserItem from './UserItem';
import GithubContext from '../context/Github/GithubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;

    if (loading) {
            return <Spinner/>
    }
    else {
        return (
            <div style={customStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }

}

        

const customStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users;