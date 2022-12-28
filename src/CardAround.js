import React from 'react';  var like=0;
 const CardAround= (props) =>(  <div className="ui card">
        <div className="content">{props.children} </div>
        <div  className="extra content">
         <div className="ui two buttons">
          <button  style={{backgroundColor:'yellow',height:'20px',width:'auto'}}>Like: {++like}</button><button style={{backgroundColor:'red', height:'20px',width:'auto'}}>Dislike</button>  
            </div>

        </div>
    </div>
    );
 
 export default CardAround;