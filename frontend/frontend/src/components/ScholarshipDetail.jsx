import React from 'react'
import './ScholarshipDetailCss.css'

const ScholarshipDetail = (props) => {
  return (
      <div class="card">
    <div class="card-image"><img height={130} width={190} src={props.image} alt="" /></div>
    <div class="category">{props.title}</div>
    <div class="heading">{props.description}
        <div class="author"><span class="name">Last Date :</span>{props.lastDate}</div>
    </div>
</div>
  )
}

export default ScholarshipDetail;