```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render
    console.log('Count:', count); 
    return () => {
      // Cleanup function - this is crucial!
      console.log('Cleanup function ran');
    };
  }, [count]); // Only re-run if 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```