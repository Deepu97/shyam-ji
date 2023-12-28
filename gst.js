const multiy=()=>{
    let a=document.getElementById("sum1").value;
    let b=document.getElementById("sum2").value;
    console.log(a,b);
    let result=a*b;
document.getElementById("res").value=result;
 

}
const gst1=()=>{
let d=document.getElementById("sgs").value;
let e=document.getElementById("sgs1").value;
let f=document.getElementById("res").value;

let gst=(f*d)/100;
document.getElementById("act").value=gst;
document.getElementById("act2").value=gst;


}
const fun=()=>{
    let de=document.getElementById("res").value;
    let p=document.getElementById("act").value;
    let g=document.getElementById("act2").value;
    let grand=parseInt(de)+parseInt(p)+parseInt(g);
    document.getElementById("total").value=grand;

}
/*const ready=()=>{
    var body=document.getElementById("body").innerHTML;
    console.log(body);
    var data=document.getElementById("data").innerHTML;
    console.log(data);
    document.getElementById("body").innerHTML=data;
    window.print();
    document.getElementById("body").innerHTML=body;
}
*/