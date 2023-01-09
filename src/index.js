// import React and ReactDOM libraries
//import { render } from '@testing-library/react';
import React from  'react';
import { createRoot } from 'react-dom/client';
import Ui from './Ui';
import Class1 from './Class1';
import StateTime from './StateTime';
import Bloggersp1 from './Bloggersp1';
import UserNotice from './UserNotice';
import Season from './Season';

//import Comment from './Comment';
//import CardAround from './CardAround';
//create component
const App=function() {
  
     return (
<div>
<hr></hr><Season/>
</div>


     ); // comment
        
  

        
        

}

const my = document.getElementById('root');
const web = createRoot(my); // new version 
web.render(< App />);