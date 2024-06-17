import React from "react";
import Button from "./Button";

export default function Bucket({ bucketName, count, img, setCount }) {
  return (
    <div className="bg-blue flex justify-center flex-col w-4 h-4 item-center rounded">
      <span>{count}</span>
      <p>{bucketName}</p>
      <Button setCount={setCount} img={img} />
      <p className="text-xs">{(count === 0 && 'empty') || (count === 10 && 'full')}</p>
    </div>
  );
}
