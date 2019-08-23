// este Componente exibe o repositório do usuário ou quem o usuário segue

import React from 'react'

function UserReposList(props) {
    return (
        <ul>
            {props.data.map(({ id, full_name, stargazers_count, html_url }) => (

                <li key={id} className='repo-list'>
                    <h3><a href={html_url}>{full_name}</a></h3>
                    <div className='repo-stars'>
                        <i className='fas fa-star'></i>
                        {stargazers_count}
                    </div>
                </li>
            ))}
        </ul>
    )
}

function UserFollowList(props){
    return(
        <ul>
            {props.data.map(({id, login,avatar_url, html_url}) => (
                <li key={id}>
                    <img className='user-data-img' src={avatar_url} alt='foto do seguidor'/>
                    <h3><a href={html_url}>{login}</a></h3>
                </li>
            ))}
        </ul>
    )
}

export default class UserDataList extends React.Component{
    render(){
        let user_repos_list  = <UserReposList data={this.props.data} />
        let user_follow_list= <UserFollowList data={this.props.data} /> 
        
        if (this.props.repos) {
            return user_repos_list
        } else {
            return user_follow_list
        }
    }
}