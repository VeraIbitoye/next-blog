import styles from './authLink.module.css'

const AuthLink = () => {
  const status= 'notauthenticated'
    return (
      <>
      {status === 'notauthenticated' ? (
        <a href='/login'>Login</a>
      ) : (
        <>
        <a href='/write'>Write</a>
        <span className={styles.link}>Logout</span>
        </>
      )}
      </>
    )
  }
  
  export default AuthLink;