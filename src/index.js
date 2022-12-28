// import React and ReactDOM libraries
//import { render } from '@testing-library/react';
import React from  'react';
import MReactDOM from 'react-dom';
import DetailCustomer from './DetailCustomer';
//import Comment from './Comment';
//import CardAround from './CardAround';
//create component
const App=function() {
  
     return (
<div>
<DetailCustomer title="Add info" 
 text="Adhere to current information"/>

<br></br>
<DetailCustomer title="Add Detail" 
 text="Adhere to the instuction on adding Details"/>
</div>
     ); // comment
        
  

        
        

};
MReactDOM.render(
    <App/> ,document.querySelector('#root')
);//code wend