import React from 'react'

const TitleList = ({lastUpdate , title}) => {
  return (
    <div className='danaRegular'>
        <h1 className='danabold'>{title}</h1>
        <p>اخرین بروز رسانی  {lastUpdate}</p>
    </div>
  )
}

export default TitleList