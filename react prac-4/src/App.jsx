import { React, useState } from "react";
import Bucket from "./components/Bucket";
import "./App.css";
import leftArrow from "./assets/left-arrow.svg";
import rightArrow from "./assets/right-arrow.svg";

export default function App() {
  const totleCount = 10;

  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(totleCount - leftCount);

  function pushLeft(params) {
    if (rightCount > 0) {
      setRightCount(rightCount - 1);
      setLeftCount(leftCount + 1);
    }
  }
  function pushRight(params) {
    if (leftCount > 0) {
      setRightCount(rightCount + 1);
      setLeftCount(leftCount - 1);
    }
  }

  return (
    <div className="bg-orange flex justify-between item-center max-w-screen min-h-50 border border-black rounded p-4 capitalize">
      <Bucket
        setCount={pushRight}
        img={rightArrow}
        bucketName={"left bucket"}
        count={leftCount}
      />
      <Bucket
        setCount={pushLeft}
        img={leftArrow}
        bucketName={"Right bucket"}
        count={rightCount}
      />
    </div>
  );
}
