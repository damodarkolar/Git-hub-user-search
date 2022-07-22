import "./UserCard.css"



export const UserCard = (props) => {
   const {login, avatar_url, html_url,type}=props.user

      return (
        <div className="userCard">
            <h1>{login}</h1>
            <img src={avatar_url} alt="" />
            <div>
                 <h1>{type}</h1>
                <a href={html_url}> Git Hub link</a>
            </div>
           
        </div>
      )
}

/*

avatar_url: "https://avatars.githubusercontent.com/u/329112?v=4"
events_url: "https://api.github.com/users/damodar/events{/privacy}"
followers_url: "https://api.github.com/users/damodar/followers"
following_url: "https://api.github.com/users/damodar/following{/other_user}"
gists_url: "https://api.github.com/users/damodar/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/damodar"
id: 329112
login: "damodar"
node_id: "MDQ6VXNlcjMyOTExMg=="
organizations_url: "https://api.github.com/users/damodar/orgs"
received_events_url: "https://api.github.com/users/damodar/received_events"
repos_url: "https://api.github.com/users/damodar/repos"
score: 1
site_admin: false
starred_url: "https://api.github.com/users/damodar/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/damodar/subscriptions"
type: "User"
url: "https://api.github.com/users/damodar"
*/