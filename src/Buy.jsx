import React from 'react';
const f2={
 fontSize:'20px',
 marginRight:'320px',
 marginTop:'50px'
}
const f22={
    fontSize:'20px',
    marginRight:'350px',
    marginTop:'50px'
   }
const r1={
    marginLeft:'320px',
    marginTop:'-30px'
   }
    const fd={
        fontFamily:'Cortado',
        border:'grey 1px solid'
    }
    const r={
        marginRight:'20px',
        marginTop:'30px',

       }
       const fd1={
        fontFamily:'Cortado',
        border:'grey 1px solid',
        width:'250px',
        marginLeft:'330px',
        marginTop:'-54px'
    }
    const fd12={
        fontFamily:'Cortado',
        border:'grey 1px solid',
        width:'250px'
    }
    const f54={
        border:"chocolate 1px solid",
        backgroundColor:'chocolate',
        color:"white",
        fontFamily:'Rockwell',
        width:'200px',
        height:'50px',
        marginLeft:'370px',
    }
const Buy =() =>
{

  return(
    <React.Fragment>
<div class="card-deck">
  <div class="card">
    <div class="card-body text-center">
      <p class="card-text"><img src="https://cdn.shopify.com/s/files/1/0065/2561/6195/t/44/assets/logo.png?27643"/></p>
      <p className="text-secondary">Cart  →   Information  →   Shipping  →  Payment</p>
     <p style={f2} className="text-dark">Contact Information</p>
     <p style={r1}>Already have an account?<a href="./Sign">Log in</a></p>
     <form action="/Shipping" className="was-validated">
  <div className="form-group">
    <input style={fd} type="text" className="form-control" id="uname" placeholder="Enter Email" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div style={r} class="form-check">
    <input type="checkbox" className="form-check-input text" id="exampleCheck1"/>
    <label className="form-check-label text-dark" for="exampleCheck1">Keep me up to date on news and offers
</label>
  </div>
</form>
<p style={f22} className="text-dark">Shipping address</p>
<form action="/Shipping" className="was-validated">
  <div className="form-group">
    <input style={fd12} type="text" className="form-control" id="uname" placeholder="First Name" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd1} type="text" className="form-control" id="uname" placeholder="Last Name" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd} type="text" className="form-control" id="uname" placeholder="Company(optional)" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd} type="text" className="form-control" id="uname" placeholder="Address" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd} type="text" className="form-control" id="uname" placeholder="Apartment" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd} type="text" className="form-control" id="uname" placeholder="City" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd12} type="text" className="form-control" id="uname" placeholder="Country" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd1} type="text" className="form-control" id="uname" placeholder="City" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <div className="form-group">
    <input style={fd} type="text" className="form-control" id="uname" placeholder="Phone(Optional)" name="uname" required/>
    <div className="valid-feedback">Valid.</div>
  </div>
  <a href="/Shipping"><button style={f54}>Buy</button></a>
</form>
    </div>
  </div>
  <div class="card">
    <div class="card-body text-center">
   <img src="https://media1.giphy.com/media/ZZZo9EVpp4KeIiMlT2/giphy.gif?cid=790b76110069bf66ed5b0f8f0c98b5b40998fe9776954b6c&rid=giphy.gif&ct=g"/>
    </div>
  </div>
</div>
    </React.Fragment>
  );
};
export default Buy;