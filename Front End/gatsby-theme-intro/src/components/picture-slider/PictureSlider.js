import React from "react";

export default function Carousel({children: slides})
{
  return (
    <div className="flex">{slides}</div>
  )
}