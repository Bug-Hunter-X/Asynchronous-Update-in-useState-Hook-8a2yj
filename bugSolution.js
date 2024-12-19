import React, { useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log(count); // Now this logs the updated count
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent; 