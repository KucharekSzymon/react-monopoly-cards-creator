import React, { useState } from 'react'

function Chance() {

  const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut eros a purus ullamcorper varius ac a elit. Vestibulum pretium nunc dapibus, fringilla massa id, volutpat nulla. Fusce et nisi vestibulum dolor rutrum iaculis. Aliquam elementum, sem et sollicitudin placerat, turpis velit luctus risus, in gravida ex ex ut quam. Mauris id feugiat tellus. Pellentesque non ipsum quam. Integer blandit purus nibh, sit amet dictum lorem tempus non.')

  return (
    <div className="form">
      <label>Treść</label>
      <textarea style={{height: "300px"}} type="text" value={text} onChange={e => setText(e.target.value)} className="form-control"/>
      <div className="railwayCard" >
      <label><b>Szansa</b></label>
        <div className='flex items-center' style={{padding: 30}}>
          <div>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Chance