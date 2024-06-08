import SplashToast from "../components/splash-toast";


export default function Home() {

    return (
    <>
      <h1 className='indie-flower-regular splash'>Local Toast</h1>
      <div className="card" id='toast-card'>
        <SplashToast />
      </div>
        <p>
          You are logged in as <strong>{username}</strong>.
        </p>
    </>
  )
}