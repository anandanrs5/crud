import React from 'react'
const Header = (props) => {
    const InLnStyle={
        backgroundColor:'blue',
        color:'white',width:'100%',
        padding:"0px 40px"
        ,borderRadius:"10px 10px 0px 0px"
        
    }
  return (
    <div>
        {/* ylest={InLnStyle} */}
        <h2  className='App-header' style={InLnStyle} >{props.title} </h2>
    </div>
  )
}

Header.defaultProps={
  title:"toDo List"
}
export default Header;