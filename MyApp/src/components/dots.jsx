import { useEffect, useState } from "react";

const Signs = ["*", "&", "{}", "[]", "</>", "#", "=="];

function SparkleField() {
  let [sign, SetElement] = useState([]);
  const [sparcle, setSparkel] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let top = Math.random() * 100;
      let left = Math.random() * 100;

      let element1 = Signs[Math.floor(Math.random() * Signs.length)];
      let element2 = Signs[Math.floor(Math.random() * Signs.length)];
      let element3 = Signs[Math.floor(Math.random() * Signs.length)];

      SetElement([top, left, element1, element2, element3]);
      setTimeout(() => {
        setSparkel(true);
      }, 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkle-field">
      <span
        className={`${sparcle ? "sparkle-visible sparkle" : "sparkle"}`}
        style={{
          top: `${sign[0]}%`,
          left: `${sign[1]}%`,
        }}
      >
        {sign[2]}
      </span>
      <span
        className={`${sparcle ? "sparkle-visible sparkle" : "sparkle"}`}
        style={{
          top: `${sign[0] + Math.random() * 100}%`,
          left: `${sign[1] + Math.random() * 50}%`,
        }}
      >
        {sign[3]}
      </span>
      <span
        className={`${sparcle ? "sparkle-visible sparkle" : "sparkle"}`}
        style={{
          top: `${sign[0] + Math.random() * 100}%`,
          left: `${sign[1] + Math.random() * 50}%`,
        }}
      >
        {sign[4]}
      </span>
    </div>
  );
}

export default SparkleField;
