import React from 'react';
const r={
    marginTop:'100px',
    marginLeft:'100px',
}
const t7={
    marginLeft:'290px',
    fontFamily:'Bembo',
    backgroundColor:'chocolate',
    border:'solid 2px white',
    marginTop:'50px',
    height:'50px',
    width:'100px'
}
const t8={
    marginLeft:'490px',
    fontFamily:'Bembo',
    backgroundColor:'chocolate',
    border:'solid 2px white',
    marginTop:'50px',
    height:'50px',
    width:'100px'
}
const Fr =() =>
{
  return(
    <React.Fragment>
   <img style={r} src="https://cdn.shopify.com/s/files/1/0065/2561/6195/t/75/assets/banner-home-bottom-5_900x.jpg?v=1559315710393093365" width="500px" height="600px"/>
   <img style={r} src="https://cdn.shopify.com/s/files/1/0065/2561/6195/t/75/assets/banner-home-bottom-6_900x.jpg?v=713816777006825118" width="500px" height="600px"/>
   <button style={t7}>Shop Now</button>
   <button style={t8}>Shop Now</button>
    </React.Fragment>
  );
};
export default Fr;