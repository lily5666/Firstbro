import React from 'react';


const d1={
  marginTop:'32px',
  fontSize:'20px',
  marginLeft:'200px'
}
const d={
  marginTop:'32px',
  fontSize:'20px',
}
const d78={
  marginTop:'32px',
  fontSize:'20px',
  border:'blue 1px solid'
}
const g={
    marginTop:'32px',
  }
const d2={
  marginTop:'30px',
  fontSize:'10px'
}
const d6={
  marginTop:'32px',
  fontSize:'20px',
}
const d4={
  marginTop:'32px',
  fontSize:'20px',
}
const Oll =() =>
{
  return(
    <React.Fragment>
  <li class="nav-item">
    <a class="nav-link active text-dark display-4" href="#"><b>GatesNotes</b></a>
  </li>
 <li class="nav-item">
    <a style={d} class="nav-link active text-dark" href="#"><b>THE BLOG<br/>
     OF BILL GATES
     </b></a>
  </li>
 <li class="nav-item">
    <a style={d1} class="nav-link active text-dark" href="#">BOOKS</a>
  </li>
<li class="nav-item">
    <a style={d2} class="nav-link active text-dark" href="#">VIDEOS</a>
  </li>
  <li class="nav-item">
    <a style={d6} class="nav-link active text-dark" href="#">ANNUAL LETTER</a>
  </li>
  <li class="nav-item">
    <a style={d4} class="nav-link active text-primary" href="#">LOG IN</a>
  </li>
  <li class="nav-item">
    <a style={d78} class="nav-link active text-primary" href="#">SIGN IN</a>
  </li>
  <li class="nav-item">
    <a style={g} class="nav-link active text-primary" href="#"><img src="data:image/png;base64,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" width="25px" height="25px"/></a>
  </li>
</React.Fragment>
  );
};
export default Oll;