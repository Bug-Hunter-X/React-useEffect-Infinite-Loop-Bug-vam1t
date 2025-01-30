# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within the dependency array.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.

## Problem

The original code attempts to increment a state variable (`count`) within the `useEffect` hook's callback function.  Because `count` is included in the dependency array,  React re-renders the component, triggering the `useEffect` hook again, leading to an infinite render loop.

## Solution

The solution involves removing the state variable from the dependency array if the effect does not rely on its value.   If the effect needs to run only once after the component mounts, using an empty array as a dependency solves this issue.