import React from "react"

const Categories = ({ca,fItems}) =>{
  return(
    <div className="btn-container">
      {
        ca.map((category,index)=>{
          return(
            <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={()=>fItems(category)}
            >
              {category}
            </button>
          )
        })
      }
    </div>
  )
}
export default Categories