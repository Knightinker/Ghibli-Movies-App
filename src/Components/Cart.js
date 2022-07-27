import React from 'react'

function Cart({data, remove}) {
  return (
    
    <>
 
  <a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src = {data.image} alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"/>
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">{data.title}</h6>
        <p className="mb-0 opacity-75">{data.original_title}</p>
      </div>
      <small className="opacity-75 text-nowrap" onClick={() => remove(data.id)}>Delete</small> //routes to remove function with data.id for parameters
    </div>
  </a>


    </>
  )
}

export default Cart