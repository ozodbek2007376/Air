import React from 'react'

export default function Chartes({rasm,matn}) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
    <div className="luxury-card">
      <img src={rasm} alt="" />
      <p>{matn}</p>
    </div>
  </div>
  )
}
