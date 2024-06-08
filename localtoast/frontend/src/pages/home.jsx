import { useSpring, animated } from '@react-spring/web'
import { useTrail } from '@react-spring/web'
import { useState } from "react";

import toast from "./../media/toast.png"

// const DarkMagick = <span className='medievalsharp-regular'>dark magick</span>
const DarkMagick = <span className='jacquard-12-regular'>dark magick</span>

const PlainToast      = <animated.img src={toast}></animated.img>
const SiteName        = <animated.h1 className="indie-flower-regular splash">Local Toast</animated.h1>
const SiteSummary     = <animated.h2 className="ubuntu-light splash">Find toast(s) near you using { DarkMagick }</animated.h2>
const LoggedIn        = <animated.p className="ubuntu-light">{username ? `You are logged in as ${username}` : "You are not logged in" }</animated.p>
const SiteDescription = <animated.p className="ubuntu-light">This is Matt here, tinkering with some stuff, ya know, as I do. Should I keep typing? probably. I guess this will be a larger site summary/description</animated.p>

export default function Home() {
  const [toggle, set] = useState(true);
  
  const items = [SiteName, SiteSummary, PlainToast,  SiteDescription, LoggedIn];
  const config = { mass: 10, tension: 2000, friction: 200 };

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
        <div className="trails-main" onClick={() => set(state => !state)}>
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