import React from 'react';
const j={
    backgroundColor:'#585858',
    paddingLeft:'270px',
    height:'20px',
    paddingBottom:'30px',
    color:'white',
}
const h={
 fontSize:'15px'
}
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
const hi={
    marginLeft:'1100px',
    marginTop:'-86px',
    height:'20px',
    width:'10px',
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
const ti={
    marginLeft:'100px'
}
const bts={
  marginTop:"-50px"
}
const f54={
  border:"black 2px solid",
  backgroundColor:'chocolate',
  color:"white",
  fontFamily:'Rockwell',
  width:'200px',
  height:'50px',
  marginLeft:'560px',
  marginTop:"100px"
}
const tf={
    marginLeft:'450px',
    color:'black',
    fontSize:'15px',
    marginTop:'70px'
}
const tf2q={
  marginLeft:'50px',
  color:'black',
  fontSize:'15px',
  marginTop:'70px'
}
const tfw={
    marginLeft:'50px',
    color:'black',
    fontSize:'15px',
    marginTop:'70px'

}
const tfe={
marginLeft:'50px',
    color:'black',
    fontSize:'15px',
    marginTop:'70px'

}
const fff={
  color:'black'
}
const Home =() =>
{

  return(
    <React.Fragment>
   <div style={j}>
       <h6 style={h}>YOUR PURCHASES HELP SAVE THE CHILDHOOD HUNGAR.EVERY ORDER+ $100 + FREE SHIPPING! </h6>
       </div>
       <h1 style={r}>122,471,206</h1>
     <p style={f}>MEALS TO THIS DATE</p>
     <img style={t} src="https://cdn.shopify.com/s/files/1/0065/2561/6195/t/75/assets/logo.png?v=18288016864101566183"/>
     <img style={y} src='https://th.bing.com/th/id/R4fb7cbabfa054bead13bd71f20dcf9dd?rik=ADYUTVAcOdBavA&pid=ImgRaw'/>
    <a href="/Sign" style={fff}><b><p style={o}>Sign in</p></b></a>
     <img style={hi} src='https://cdn.shopify.com/s/files/1/0065/2561/6195/t/75/assets/bag_30x.png?v=7854263295330478870'/>
     <p style={p}>(0)</p>
     <nav className="navbar navbar-expand-md navbar-dark">
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <b><a style={tf} className="nav-link " href="/New">NEW!</a></b>
      </li>
      <li className="nav-item">
        <b><a style={tf2q} className="nav-link " href="/">HOME</a></b>
      </li>
      <li className="nav-item">
       <b> <a style={tfw} className="nav-link" href="/Show">SHOP ALL</a></b>
      </li>
      <li className="nav-item">
        <b><a style={tfe} className="nav-link" href="/About">ABOUT</a></b>
      </li>
    </ul>
  </div>
</nav>
     <div><img style={ti} src="https://cdn.shopify.com/s/files/1/0065/2561/6195/files/Travel-Collection_HP_1800x.jpg?v=1621268419" width="1100" />
</div>
<div style={bts}>
 <a href="/hell"><button style={f54}>Click!</button>
 </a>
 </div>

    </React.Fragment>
  );
};
export default Home;