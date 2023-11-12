import Marquee from "react-fast-marquee";
import useIsMobile from "../utils/isMobile.hook";

// eslint-disable-next-line react/prop-types
export default function MarqueeElement({ children, direction = "left" }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Marquee
        direction={direction}
        speed={25}
        className="py-3 overflow-y-hidden"
      >
        {children}
      </Marquee>
    );
  } else {
    return (
      <Marquee
        gradient
        direction={direction}
        speed={25}
        className="py-3 overflow-y-hidden"
      >
        {children}
      </Marquee>
    );
  }
}
