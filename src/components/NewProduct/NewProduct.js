import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './NewProduct.module.css';

class NewProduct extends Component {
 
    constructor(props){
        super(props)
      this.state={
        product:{
            prodName:"",
            prodCID:'',
            prodUrl:'',
            prodDescription:'',
            catName:'',
            categoryUrl:''
        },
        notification:false,
        message:""
    }
    }

 newProductInputHandler = (e) =>{
   const prod = {...this.state.product}
   
  switch(e.target.id){
    case "prodName":
      prod.prodName= e.target.value
      this.setState({product:prod});
      break;
      case "prodCID":
          prod.prodCID= e.target.value
          this.setState({product:prod});
      break;
      case "prodUrl":
          prod.prodUrl= e.target.value
          this.setState({product:prod});
      break;
      case "prodDescription":
          prod.prodDescription= e.target.value
          this.setState({product:prod});
      break;
      case "catName":
          prod.catName= e.target.value
          this.setState({product:prod});
      break;
      case "categoryUrl":
          prod.categoryUrl= e.target.value
          this.setState({product:prod});
      break;
      default:
          this.setState=({
            
            product:{
            prodName:" ",
            prodCID:'',
            prodUrl:'',
            prodDescription:'',
            catName:'',
            categoryUrl:''
          },
          notification:false,
          message:""
        }) 
      }}
 
clearHandler = () => {
 console.log("clicked") 

  this.setState({
    product:{
    product:{
    prodName:" ",
    prodCID:'',
    prodUrl:'',
    prodDescription:'',
    catName:'',
    categoryUrl:'',
    
  },
  notification:false,
  message:""
}})
}

notificationHandler = (message) => {
  
 this.setState({message:message})
}

submitHandler = () => {
const prod = this.state.product
this.setState({notification:true})
this.notificationHandler(` ${this.state.product.prodCID} `); 
setTimeout(()=>{

  
  this.props.newProductSubmitHandler(prod);

 },3000)  
 
  }

render(){
  console.log("render NewProduct", this.state.message, this.state.message)
     return (
      <Aux className="card">
        <form>
            <div className="form-group d-flex justify-content-end">
              {this.state.notification ? <div className={classes.Notification+" d-flex justify-content-center align-items-center"} >Product <span className="font-weight-bold">{this.state.message} </span> added</div>:null}
            <a href="#" onClick={this.timesNewProductHandler}><i style={{color:"red"}} className="fas fa-times fa-2x"></i></a>
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label htmlFor="prodName">Product name</label>
              <input onChange={this.newProductInputHandler} value={this.state.product.prodName} type="text" className="form-control" id="prodName" required / >
              
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label htmlFor="prodCID">Product CID</label>
              <input onChange={this.newProductInputHandler} type="text" className="form-control" id="prodCID"  value={this.state.product.prodCID} required / >
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label htmlFor="prodUrl">Product url</label>
              <input onChange={this.newProductInputHandler} type="text" className="form-control" id="prodUrl" value={this.state.product.prodUrl} required / >
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label htmlFor="prodDescription">Product description</label>
              <input onChange={this.newProductInputHandler} type="text" className="form-control" id="prodDescription" value={this.state.product.prodDescription} required / >
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label htmlFor="catName">Category name</label>
              <input onChange={this.newProductInputHandler} type="text" className="form-control" id="catName" value={this.state.product.catName}  required / >
            </div>
            <div className="form-group d-flex flex-column align-items-start">
              <label htmlFor="categoryUrl">Category url</label>
              <input onChange={this.newProductInputHandler} type="text" className="form-control" id="categoryUrl"  value={this.state.product.categoryUrl}  required/ >
            </div>
            <div className="form-group d-flex justify-content-around">
              <button onClick={this.submitHandler} type="submit" className="btn btn-success">Add</button>
              <button onClick={this.clearHandler} className="btn btn-danger">Clear</button>
            </div>
</form>
      </Aux>
      );
 }
}
 
export default NewProduct;
