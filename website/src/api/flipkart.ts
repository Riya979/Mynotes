import { useEffect } from "react";

useEffect(() => {
    // Perform some side effect
  
    // Cleanup function
    return () => {
      // Code to run when the component is unmounted or when the dependencies change
    };
  }, [/* dependencies */]);