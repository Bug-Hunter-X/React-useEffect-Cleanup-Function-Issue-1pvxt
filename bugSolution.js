```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    if (count > 0) {
      intervalId = setInterval(() => {
        console.log('Count:', count);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId); 
      console.log('Cleanup function ran');
    };
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```