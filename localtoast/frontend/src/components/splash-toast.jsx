import { useSpring, animated } from '@react-spring/web'
import toast from "./../media/toast.png"

export default function SplashToast() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }
  
  return (
    <animated.img
    src={toast}
      onClick={handleClick}
      style={{
        width: "12rem",
        height: "12rem",
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}