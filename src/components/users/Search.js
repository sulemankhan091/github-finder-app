import React, { useContext, useState } from 'react'
import GithubContext from '../context/Github/GithubContext';


const  Search = ({setAlert}) => {

    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');
    
const    onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('please enter something', 'light');
        }
        else {
           githubContext.searchUsers(text);
            setText("");
        }
    }
    
 const   onChange = (e) =>   setText(e.target.value)
     
        
        return (
            <div>
                <form onSubmit = {onSubmit}>
                    <input type="text" name="text" value={text}
                        onChange={onChange}
                        placeholder="Search users..." />
                    <input type="submit" value="Search User" className="btn btn-dark btn-block"/>
                </form>
                { githubContext.users.length > 0 && (<button
                        className="btn btn-light btn-block"
                        onClick={githubContext.clearUsers}
                >Clear</button>)}
                
            </div>
        )
    }



    

    



export default Search;
