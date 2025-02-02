import React, { useState } from "react";

export default function Show() {
  const [Show, SetShow] = useState(false);

  const handleClick = (id) => {
    SetShow(true);
    document.querySelector('.btn-danger').innerHTML = id
  };

  
  return (
    <>
      {Show ? (
        <>
          <textarea></textarea>
        </>
      ) : (
        ""
      )}
      <button className="btn btn-danger p-2" id="btn" onClick={()=>handleClick('zid hna')}>
        +
      </button>
    </>
  );
}
