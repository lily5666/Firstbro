import React from 'react';
const r={
    marginTop:'40px',
    marginLeft:'100px'
}
const y={
    width:'300px',
    marginLeft:'300px',
    border:'black 3px solid',
    marginTop:'20px'
}
const r5={
    width:'200px',
    marginLeft:'650px',
    border:'black 3px solid',
    marginTop:'-94px',
    backgroundColor:'#6F4827'
}
const w3={
    marginLeft:'250px',
    marginTop:'-250px',
}
const w4={
    marginLeft:'180px',
    marginTop:'-30px',
    fontSize:'50px',
    fontFamily:'Baskerville Old Face'
}
const Last =() =>
{
  return(
    <React.Fragment>
   <img style={r} src="https://i.pinimg.com/originals/95/f2/51/95f251dc546d705152a8eaac4867bbb4.jpg" width="1100px" height="200px"/>
   <form>
  <div className="form-group">
    <input style={y} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>  </div>
  <button style={r5} type="submit" className="btn btn-primary">Submit</button>
  <p style={w3} className="display-4 text-white">JOIN OUR NEWSLETTERING!</p>
  <p style={w4} className="text-white">Sign up and get 15% off your first purchase</p>
</form>
    </React.Fragment>
  );
};
export default Last;