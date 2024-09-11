"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Bir hata oluştu!</h2>
      <button onClick={() => reset()}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
