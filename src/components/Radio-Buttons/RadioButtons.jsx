import React from "react";
import "./RadioButtons.scss";

const RadioButtons = () => {
  return (
    <div class="radio-buttons">
      <input type="radio" name="High" />
      <label for="High">High ABV(&gt; 6.0 &#37; )</label>
      <input type="radio" name="Classic" />
      <label for="Classic">Classic range</label>
      <input type="radio" name="Acidic" />
      <label for="Acidic">Acidic (ph &lt; 4 )</label>
    </div>
  );
};

export default RadioButtons;
