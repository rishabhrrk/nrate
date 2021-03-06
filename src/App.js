import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./App.css";
import Nav from "./Components/navbar";
import Foot from "./Components/footer";
import Region from "./Components/region";
import OrganicMatter from "./Components/organicMatter";
import CoverCrop from "./Components/coverCrop";
import Price from "./Components/price";
import Cost from "./Components/cost";
import Display from "./Components/display"

class App extends React.Component {
  state = {
    radio1: "1",
    radio2: "1",
    radio5: "1",
    price: 0,
    cost: 0,
    nrate: ""
  };

  onCheckChangeRadio1 = e => {
    this.setState({ radio1: e.target.value });
  };
  onCheckChangeRadio2 = e => {
    this.setState({ radio2: e.target.value });
  };
  onCheckChangeRadio3 = e => {
    this.setState({ radio3: e.target.value });
  };
  onCheckChangeRadio4 = e => {
    this.setState({ radio4: e.target.value });
  };
  onCheckChangeRadio5 = e => {
    this.setState({ radio5: e.target.value });
  };
  onPriceChange = e => {
    this.setState({ price: e.target.value });
  };
  onCostChange = e => {
    this.setState({ cost: e.target.value });
  };
  onReset = e => {
    this.setState({
      radio1: "1",
      radio2: "1",
      radio5: "1",
      price: 0,
      cost: 0
    });
  };

  handleclick(e){
    e.preventDefault();
    var u = "https://fast-bayou-21097.herokuapp.com/"+this.state.price+"/"+this.state.cost+"/"+this.state.radio1+this.state.radio2+this.state.radio5
    axios.get(u).then(response => {
      console.log(response)
      if(response.data)
      this.setState({nrate: response.data})
      else
      this.setState({nrate: "Not correct selection"})
    })
    return false
  }

  render() {
    return (
      <div className="container" style={{height:"700px", 
      borderStyle:"solid", borderColor:"cadetblue", position: "relative", width:"700px", backgroundColor:"white"}}>
        <Nav />
        <form className="form-horizontal">
          <div className="form-group">
            <Region
              onCheckChangeRadio1={this.onCheckChangeRadio1}
              radio1={this.state.radio1}
            />
            <OrganicMatter
              onCheckChangeRadio2={this.onCheckChangeRadio2}
              radio2={this.state.radio2}
            />
            <CoverCrop
              onCheckChangeRadio5={this.onCheckChangeRadio5}
              radio5={this.state.radio5}
            />
            <Price onPriceChange={this.onPriceChange} price={this.state.price}/>
            <Cost onCostChange={this.onCostChange} cost={this.state.cost}/>
            {/* <div className="row">
              <label className="control-label col-sm-2">
                  <h5>N Rate {this.state.nrate}</h5>
              </label>
            </div> */}
            {this.state.nrate!="" && <Display nrate={this.state.nrate} />}
            <button className="btn btn-primary btn-lg m-3" onClick={(e) => {this.handleclick(e)}}>Calculate</button>
            <button className="btn btn-primary btn-lg m-3" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </form>
        <Foot />
      </div>
    );
  }
}

export default App;
