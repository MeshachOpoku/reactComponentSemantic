import React from 'react';

//create component 
const DetailCustomer=(props)=>(
<div>
<div className="placeholder">
<div className="pdf file ">
  
  No document are listed for this customer
</div>
<button style={{backgroundColor:'blue',color:'white'}}  className="Add Document">{props.title}</button>
</div>
<div className="placeholder">
 <div><emp>{props.text}</emp></div>
</div>

</div>


);
export default DetailCustomer;
