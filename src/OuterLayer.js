import React, { useState } from 'react';
import CombinedForm from './CombinedForm';


function OuterLayer() {
  const [backgroundImage, setBackgroundImage] = useState('/landarea0.png');

  return (
    <div className="outer-div" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="inner-div1">
        <div className="inner-div2">
            <CombinedForm func={setBackgroundImage} />
            <br/>
            <br/>
        </div>
      </div>
    </div>
  );
}

export default OuterLayer;
