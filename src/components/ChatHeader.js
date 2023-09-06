import { useCookies } from 'react-cookie'

const ChatHeader = ({ user }) => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])
    // const authToken = cookies.AuthToken
    const logout = () => {
        // removeCookie('UserId', cookies.UserId)
        // removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src='https://wallpaperaccess.com/full/1279777.jpg' alt={"Virat"}/>
                </div>
                {/* <h3>{user.first_name}</h3> */}
                <h3>aishwarya</h3>
            </div>
            <i className="log-out-icon" onClick={logout}>⇦</i>
        </div>
    )
}

export default ChatHeader