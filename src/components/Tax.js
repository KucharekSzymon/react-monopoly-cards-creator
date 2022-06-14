import React, { useState } from "react";

function Tax() {

  const [tax, setTax] = useState(0);

  return (
    <div className="form">
    <label>Podatek od wzbogacenia</label>
    <input type="text" className="form-control" min="0" value={tax} onChange={e => setTax(e.target.value)} />
    <div className="railwayCard" >
      <div>
        <p>Podatek od wzbogacenia</p>
      </div>
      <div>
        Zapłać {tax} $
      </div>
      
    </div>
    </div>
  )
}

export default Tax;
