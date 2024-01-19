import React from 'react'

function Nextarrow(props) {
    const { className, style, onClick } = props;
  return (
    <div>
       <div
      className={className}
      style={{ ...style, display: "flex", background: "white",borderRadius:'50%',justifyContent:'center',alignItems:'center',padding:'4px' }}
      onClick={onClick}
    />
    </div>
  )
}

export default Nextarrow
