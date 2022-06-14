import { useState } from "react";
import Railway from "./Railway";
import Work from "./Work";
import Street from "./Street";
import Chance from "./Chance";
import Prison from "./Prison";
import Tax from "./Tax";
import html2canvas from "html2canvas";

function Form() {
  const [type, setType] = useState("railway");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const TestButton = () => {
    html2canvas(document.querySelector(".railwayCard")).then((canvas) => {
      window.open(canvas.toDataURL("image/png"));
      var gh = canvas.toDataURL("png");

      var a = document.createElement("a");
      a.href = gh;
      a.download = "image.png";

      a.click();
    });
  };
  return (
    <div className="form">
      <select onChange={handleChange} className="form-control">
        <option value="railway">Dworzec</option>
        <option value="work">Elektrownia/Wodociągi</option>
        <option value="town">Miasto</option>
        <option value="chance">Szansa</option>
        <option value="jail">Więzienie</option>
        <option value="tax">Podatek</option>
      </select>
      <button className="btn btn-outline-dark" onClick={TestButton}>
        Zapisz
      </button>

      <div className="Karta">
        {type === "railway" && <Railway />}
        {type === "work" && <Work />}
        {type === "town" && <Street />}
        {type === "chance" && <Chance />}
        {type === "jail" && <Prison />}
        {type === "tax" && <Tax />}
      </div>
    </div>
  );
}

export default Form;
