import { useEffect, useState } from "react";

const Signs = [
  "*",
  "&",
  "{}",
  "[]",
  "</>",
  "#",
  "==",
  "()",
  ">",
  "<",
  "!",
  "@",
  "$",
  "%",
  "^",
  "+",
  "-",
  "_",
  "=",
  "~",
];

function SparkleField() {
  let [sign, SetElement] = useState([[], [], []]);
  const [sparcle, setSparkel] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let top = [];
      let left = [];
      let positions = [];

      for (let i = 0; i < 3; i++) {
        positions[i] = Signs[Math.floor(Math.random() * Signs.length)];
        left[i] = Math.random() * 100;
        top[i] = Math.random() * 100;
      }
      SetElement([top, left, positions]);
      setTimeout(() => {
        setSparkel(true);
      }, 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkle-field">
      {sign[2].map((element, i) => (
        <span
          key={i}
          className={`${sparcle ? "sparkle-visible sparkle" : "sparkle"}`}
          style={{
            top: `${sign[0][i]}%`,
            left: `${sign[1][i]}%`,
          }}
        >
          {element}
        </span>
      ))}
    </div>
  );
}

export default SparkleField;
