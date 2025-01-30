```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This will run only once after the component mounts
    setCount(count + 1);
  }, []); // The empty dependency array makes it run only once

  return <div>Count: {count}</div>;
}
```