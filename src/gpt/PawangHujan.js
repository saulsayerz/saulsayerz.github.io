import React, { useState, useEffect } from 'react';
import './PawangHujan.css'; // Ensure your CSS file is updated with the new styles

const PawangHujan = () => {
  const [isSplatActive, setIsSplatActive] = useState(true);
  const [isBackRowActive, setIsBackRowActive] = useState(false);
  const [isRain, setIsRain] = useState(true);

  const makeItRain = () => {
    let drops = "";
    let backDrops = "";
    let increment = 0;
    while (increment < 100 && isRain) {
      const randoHundo = Math.floor(Math.random() * 98) + 1;
      const randoFiver = Math.floor(Math.random() * 4) + 2;
      increment += randoFiver;
      drops += `<div class="drop" style="left: ${increment}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
      backDrops += `<div class="drop" style="right: ${increment}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
    }
    return { drops, backDrops };
  };

  useEffect(() => {
    const { drops, backDrops } = makeItRain();
    document.querySelector('.rain.front-row').innerHTML = drops;
    document.querySelector('.rain.back-row').innerHTML = backDrops;
  }, [isSplatActive, isBackRowActive, isRain]); // Rerender raindrops when toggles change

  return (
    <div className={`pawang-hujan-container ${isBackRowActive ? 'back-row-toggle' : ''}`}>
      <div className="rain front-row"></div>
      <div className="rain back-row"></div>
      <div className="toggles">
        <div className={`splat-toggle`}>PAWANG HUJAN!!!
        <br></br>
        <img src="/saul.jpg"></img></div>
        <div className={`back-row-toggle toggle ${isBackRowActive ? 'active' : ''}`} onClick={() => setIsRain(!isRain)}>Toggle<br />Hujan</div>
      </div>
    </div>
  );
};

export default PawangHujan;
