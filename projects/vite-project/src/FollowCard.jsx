import {useState } from "react"
export function FollowCard({formatUserName, userName, name}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'followCard-button is-following'
    : 'followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
    <article className="follow-card">
        <header className="follow-card-header">
            <img className="follow-card-avatar" src={`https://unavatar.io/${userName}`} alt="Avatar" />
            <div className="follow-card-info">
                <strong>{name}</strong>
                <span className="follow-card-userName">{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick= {handleClick}>
                {text}
            </button>
        </aside>
     </article>
    )
}