import React from 'react'

export default function TimeCard({Nomi,pul}) {
  return (
    <div class="col-md-4">
    <div class="pricing-card card-popular">
      <h4>{Nomi}</h4>
      <ul class="list-unstyled mt-3">
        <li>✔ One-time initiation fee $0</li>
        <li>✔ Deposit $50k</li>
        <li>✔ Pricing / rates Dynamic</li>
        <li>✔ Priority fleet access Yes</li>
        <li>✖ Guaranteed fleet access No</li>
      </ul>
      <div class="price">{pul}</div>
      <button class="btn btn-primary w-100">Choose</button>
    </div>
  </div>
  )
}
