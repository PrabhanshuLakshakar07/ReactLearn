import React from 'react'

import image from '../Shared/constant/staticData'

export const MyImageComp = () => {
  return (
  
    <div>
        <h1>This is My Image Component</h1>
        {/* <img src={samosa} alt="samosa" width="300px" height="200px"/> */}
         <img src={image.bigimg} alt="samosa" />
          <img src={image.smallimg} alt="samosa" />
           <img src={image.travel} alt="samosa" />
    </div>

  )
}
export default MyImageComp