import React from 'react';
const r={
    fontFamily:'Agency FB',
    marginLeft:'40px',
    marginTop:'30px'
}
const f={
    fontFamily:'Arial Nova',
    marginLeft:'10px',
    fontSize:'20px'
}
const t={
    marginLeft:'500px',
    height:'40px',
    width:'150px',
    marginTop:'-150px'
}
const y={
    marginLeft:'300px',
    height:'20px',
    width:'20px',
    marginTop:'-170px'
}
const o={
    marginLeft:'1000px',
    marginTop:'-105px'
}
const h={
    marginLeft:'1100px',
    marginTop:'-86px',
    height:'20px',
    width:'10px'
}
const p={
    marginLeft:'1130px',
    marginTop:'-66px',
}
const as={
    marginLeft:'460px',
    marginTop:'66px',
    fontSize:'15px'
}
const as3={
    marginLeft:'560px',
    marginTop:'-26.5px',
    fontSize:'15px'
}
const as4={
    marginLeft:'660px',
    marginTop:'-26.5px',
    fontSize:'15px'
}
const Divt =() =>
{
  return(
    <React.Fragment>
     <h1 style={r}>122,471,206</h1>
     <p style={f}>MEALS TO THIS DATE</p>
     <img style={t} src="https://cdn.shopify.com/s/files/1/0065/2561/6195/t/75/assets/logo.png?v=18288016864101566183"/>
     <img style={y} src='https://th.bing.com/th/id/R4fb7cbabfa054bead13bd71f20dcf9dd?rik=ADYUTVAcOdBavA&pid=ImgRaw'/>
     <b><p style={o}>Sign in</p></b>
     <img style={h} src='https://cdn.shopify.com/s/files/1/0065/2561/6195/t/75/assets/bag_30x.png?v=7854263295330478870'/>
     <p style={p}>(0)</p>
     <b><h1 style={as}>NEW!</h1></b>
    <b> <h1 style={as3}>ABOUT</h1></b>
     <b><h1 style={as4}>SHOP ALL</h1></b>
    </React.Fragment>
  );
};
export default Divt;