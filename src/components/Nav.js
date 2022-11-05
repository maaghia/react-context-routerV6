import React, { useContext, useEffect } from "react";

export default function Nav() {
    useEffect(() => {
      console.log('Component re-rendered')
    })
    
  return (
    <nav>
      <div>Bucket List</div>
      <div>
        4 wishes
      </div>
    </nav>
  );
}
