import Marquee from "react-fast-marquee";

// eslint-disable-next-line react/prop-types
export default function MarqueeElement({ children, direction = "left" }) {
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
