import React from 'react'

const Footer = ({length}) => {
  const InLnStyle={
    backgroundColor:'blue',
    color:'white',width:'100%',
    padding:"0px 40px",
    borderRadius:"0px 0px 10px 10px"
    
}
    // let year=new Date();
  return (
    <div>
        <h1 style={InLnStyle }
        > {length} {length == 1 ? "item is there" :"items are here"}</h1>
    </div>
  )
}

export default Footer