# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook: improper use of the cleanup function, leading to unexpected behavior or performance problems. The example shows an effect that logs the count.  Without a proper cleanup function, the console logs would continue to happen even if the component unmounts.

## How to Reproduce
1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Observe console output upon mounting and unmounting the component.

## Solution
The solution demonstrates the correct implementation of a cleanup function within the `useEffect` hook. The cleanup function ensures that any resources allocated within the effect are properly released when the component unmounts or when the dependencies change.