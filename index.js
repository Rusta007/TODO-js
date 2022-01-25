let arrayObj = [];

function toggle()
{
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
 
}
const add = e =>
{
    let formdata={
        lname: document.getElementById('name').value
    }

    localStorage.setItem('formdata', JSON.stringify(formdata));
    console.log(localStorage.getItem('formdata'));
    dispdata();
    e.preventDefault();
}
function dispdata()
{
    let { lname } = JSON.parse(localStorage.getItem('formdata'));
    var output = document.getElementById(child);
    output.innerHTML=`
    output  ${lname}`;
    console.log(lname);
   
    // lname.innerText= arrayObj[arrayObj.length-1].arrayObj;
    // const exelement = document.getElementById("child");
    // exelement.appendChild(lname);
}



//  function addDataObj()
//  {
//         let invalue = document.getElementById("name").value;
      
//         let objData = 
//             {
//           id: Date.now(),
//           taskName: invalue,
//         }
      
//         arrayObj.push(objData);
//         addCard()
//         console.log(arrayObj);
      
// }
// function addCard() {
  
//     const element = document.createElement("div");
//     element.setAttribute("class","child")

//     element.innerText= arrayObj[arrayObj.length-1].arrayObj;
//     const exelement = document.getElementById("parent");
//     exelement.appendChild(element);

    
   
// }
