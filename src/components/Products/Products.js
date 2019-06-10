import React from 'react';


const Products = (props) => {
    if(props.prodArr.length==0){
      return null;
    }
    console.log(props.prodArr,"props.prodArr")
    const prodArrr = props.prodArr.map(el=>{
      
        return  (
        <div className="card m-2 shadow" style={{width:"20rem"}} key={el.cid}>
          <span 
          href={el.cid} 
          className="badge badge-info" 
          style={{position:"absolute",top:"5px",left:"5px"}}>{el.cid}</span>
          <span 
          onClick={()=> props.productEditHandler(el)}  
          style={{color:"lightgrey"}}>
            <i 
            className="fas fa-edit" 
            style={{position:"absolute",top:"5px",right:"5px"}}>
            </i>
          </span>
          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">{el.description}</p>
            <div className="d-flex justify-content-around">
              <a 
              href={el.url} 
              className="badge badge-warning">Product link</a>
              <a 
              href={el.subcategory[0].url} 
              className="badge badge-secondary">{el.subcategory[0].name}</a>
            </div>
  
          </div>
  </div>)
  })
 
     return (
        <div className="d-flex flex-wrap w-100 p-1 justify-content-center bg-light my-4" style={{margin:"0 auto"}}>
            
        {prodArrr}
      
      </div>
     )
}
 


export default Products;