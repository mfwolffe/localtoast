import { useState } from "react";
import { useTrail } from '@react-spring/web'
import { animated } from '@react-spring/web'

import toast from "./../media/toast.png"

// const navigate   = useNavigate();
const DarkMagick = <span className='jacquard-12-regular'>dark magick</span>
const IsLoggedIn = <animated.p className="ubuntu-light">You are logged in as <animated.span className="ubuntu-bold">{username}</animated.span></animated.p>

const PlainToast      = <animated.img src={toast} className="mt-4 mb-4"></animated.img>
const SiteName        = <animated.h1 className="monoton-regular splash">Local Toast</animated.h1>
const SiteSummary     = <animated.h2 className="ubuntu-light splash">Find toast(s) near you using { DarkMagick }</animated.h2>
// const LoggedIn        = <animated.p className="ubuntu-light">{username ? `You are logged in as ${username}` : "You are not logged in" }</animated.p>
const SiteDescription = <animated.h3 className="ubuntu-light splash">Local Toast exists to serve one purpose: find you the best toast you've had in your entire life. You can thank us later.</animated.h3>

const EnterButton = (
    <animated.a href="/dash">
      <animated.button>
        Enter
      </animated.button>
    </animated.a>
)

export default function Home() {
  const [toggle, set] = useState(true);
  
  const items = [SiteName, SiteSummary, PlainToast,  SiteDescription, IsLoggedIn, EnterButton];
  const config = { mass: 25, tension: 2250, friction: 250 };

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 100,
    height: toggle ? 200 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <>
      <div className="card" id='toast-card'>
        <div className="trails-main">
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.to(x => `translate3d(0,${x}px,0)`)
              }}
              >
                { items[index] }
              </animated.div>
            ))}
          </div>
      </div>
    </div>
    </>
  )
}