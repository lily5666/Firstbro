import React from 'react';
const as4={
    marginLeft:'560px',
    fontSize:'25px',
    fontFamily:'Arial Nova Light',
    marginTop:'50px'
}
const t={
    marginLeft:'60px'
}
const t1={
marginLeft:'990px',
marginTop:'-60px'
}
const t2={
marginLeft:'590px',
marginTop:"-60px"
}
const t3={
 marginLeft:'180px'
}
const k={
    backgroundColor:'lightblue',
    width:'663px',
    marginLeft:'600px',
    marginTop:'-400px',
    height:'400px'
}
const g={
    fontSize:'35px',
    marginLeft:'130px',
    fontFamily:'Bembo',
    padding:'1em'
}
const k1={
    fontSize:'20px',
    marginLeft:'160px',
    fontFamily:'Bembo'
}
const t7={
    marginLeft:'260px',
    fontFamily:'Bembo',
    backgroundColor:'chocolate',
    border:'solid 2px white'
}
const New =() =>
{
  return(
    <React.Fragment>
     <b><h1 style={as4}>NEW ARRVIALS</h1></b>
     <img style={t} src="https://cdn.shopify.com/s/files/1/0065/2561/6195/products/Weekender_02_large.jpg?v=1621267044" width="400px" />
     <img src="https://cdn.shopify.com/s/files/1/0065/2561/6195/products/Multi-FEED-Bag_02_84eb5d45-42c0-409e-ad30-69c7f9bb38bf_large.jpg?v=1619802536" width="400px" />
     <img src="https://cdn.shopify.com/s/files/1/0065/2561/6195/products/Indigo_02_large.jpg?v=1617372959" width="400px" />
     <p style={t3}>WEEKEND DUFFLE-$199 <br/>100 MEALS</p>
     <p style={t2}>BLACK DUFFLE-$199 <br/>100 MEALS</p>
     <p style={t1}>WHITE DUFFLE-$199 <br/>100 MEALS</p>
     <img src="https://thumbs.dreamstime.com/b/portrait-homeless-egyptian-children-chairty-event-29590120.jpg" width="600px" />
     <div style={k}><h1 style={g}>FIGHTING HUNGER,<br/>MORE THAN EVER</h1>
     <p style={k1}>As a result of the pandamic, our<br/>
     mission is even more critical. Together,<br/>
     with every purchase, we can help<br/>
     provide life-changing meals to <br/>kids who need it!
     </p>
     <button style={t7}>Shop Now/ Give Meals</button>
     </div>
    </React.Fragment>
  );
};
export default New;