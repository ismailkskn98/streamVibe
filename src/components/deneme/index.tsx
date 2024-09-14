"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { increment, decrement } from "@/store/features/categories/categoriesSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
