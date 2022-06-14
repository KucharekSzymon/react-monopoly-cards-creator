import { useState } from "react"

function Work() {

  const [typ, setTyp] = useState('electric');
  const [rent, setRent] = useState('');

  const handleChange = event => {
    setTyp(event.target.value);
  }


  return (
    <div className="form">
      <label>Rodzaj</label>
      <select className="form-control" onChange={handleChange}>
        <option value="electric">Elektrownia</option>
        <option value="water">Wodociągi</option>
      </select>
      <label>Koszt</label>
      <input type="text" min="0" name="rent" value={rent} onChange={e => setRent(e.target.value)} className="form-control"/>

      <div className="railwayCard">
        <div style={{fontSize: 50, textAlign: "center"}}>{typ === 'electric' ? "Elektrownia" : 'Wodociągi'}</div>
        <div>
          <div >Koszt</div>
          <div >{rent !== '' && rent + ' $'}</div>
        </div>
        <div style={{textAlign: "center"}}>
          <div >Czynsz za sztukę</div>
          <div >Wyrzucona wartość kości * 4</div>
        </div>
        <div style={{textAlign: "center"}}>
          <div >Czynsz za wszystkie</div>
          <div >Wyrzucona wartość kości * 10</div>
        </div>
      </div>
      
    </div>
  )
}

export default Work