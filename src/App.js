import React,{Component} from 'react';
import './App.css';

// const convertFormData = async (data) => {
// let formData = new FormData();
// for (let k in data) {
// await formData.append(k, data[k]);
// }
// return formData;
// };
class App extends Component {
constructor(){
super()
this.state = {

}
}

// handelChange = (e)=>{
// e.preventDefault()
// this.setState({
// [e.target.name] : e.target.files[0]
// })
// }

// handelSubmit = async (e)=>{
// e.preventDefault()

// let resp = await fetch("http://3.19.86.25:8080/api/earner/signup", {
// method: 'POST',
// body: await convertFormData(this.state)
// })

// // axios.post("http://3.19.86.25:8080/api/earner/signup",{
// // headers: {
// // 'Accept': '*/*',
// // 'Content-Type': 'multipart/form-data',
// // }
// // }, await convertFormData(this.state))

// } 
componentDidMount(){
// Load This Code At The End Of HTML File
var iframeEl = document.getElementById('rz-iframe');
setTimeout(function() {
document.getElementById('rz-iframe').style.display = "inline"
}, 1100);
setTimeout(function(){
iframeEl.contentWindow.postMessage("", 'http://3.19.86.25:8081/'); 
}
,1000)

// function bindEvent(element, eventName, eventHandler) {
//   if (element.addEventListener){
//       element.addEventListener(eventName, eventHandler, false);
//   } else if (element.attachEvent) {
//       element.attachEvent('on' + eventName, eventHandler);
//   }
// }
// // var iframeEl = document.getElementById('rz-iframe');
// bindEvent(window, 'message', function (e) {
// iframeEl.style.height = e.data.height;
// iframeEl.style.width = e.data.width;
// });

}

render(){
return (
<div className="App">
<iframe src="http://3.19.86.25:8081/" id="rz-iframe" title="frame"  allowtransparency="true" ></iframe>
{/* <form>
<label>img1</label>
<input type="file" name="frontSide" onChange = {(e)=> this.handelChange(e)} />
<label>img1</label>
<input type="file" name="backSide" onChange = {(e)=> this.handelChange(e)} />
<label>img1</label>
<input type="file" name="earnerImage" onChange = {(e)=> this.handelChange(e)} />
<input type="submit" value="Upload Image" name="submit" onClick = {(e)=>this.handelSubmit(e)} />
</form> */}
</div>
);
}

}

export default App;