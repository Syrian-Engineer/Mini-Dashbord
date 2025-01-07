import { useEffect, useRef } from "react";
import "./CircularProgress.css";

interface Props {
  value: number;
  offset: number;
  color: string;
}

const CircularProgress = ({ value, offset, color }: Props) => {
  const svgCircleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (svgCircleRef.current) {
      svgCircleRef.current.style.setProperty("--clr", color);
      svgCircleRef.current.style.setProperty("--p", `${offset}%`);
    }
  }, [color, offset]);

  return (
    <div className="circular-progress">
      <div className="details">
        <h1>{value}</h1>
        <p>%</p>
      </div>

      <svg>
        <circle cx="55" cy="55" r="50" className="svg-circle-gray" />
        <circle
          ref={svgCircleRef}
          cx="55"
          cy="55"
          r="50"
          className="svg-circle"
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
