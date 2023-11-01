import React, { useState } from "react";

const ErrorTest = function () {
  const [error, setError] = useState(false);

  function handleClick() {
    setError(true);
  }

  if (error) {
    throw new Error("Oops, something went wrong!");
  }

  return (
    <button onClick={handleClick} className="button search__button">
      Test Error
    </button>
  );
};

export default ErrorTest;
