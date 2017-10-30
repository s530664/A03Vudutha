
function calculateArea()
{

    var len,brdth;
     len= document.getElementById("length").value;
     brdth=document.getElementById("breadth").value;

     let area = getArea(len,brdth);
     $("#area").html("Area of Rectangle is: "+area);
}

function getArea(len,brdth)
{
    if(len =="" && brdth =="") {
    alert("please enter values.it should'nt be blank!");
    throw Error("please enter values.it should'nt be blank!");
    }
    if(isNaN(len) || isNaN(brdth)) {
    alert("Value should be a number")
    throw Error ("Value should be a number!");
    }
    if(len <=0||brdth <=0) {
    alert("Value shouldn't be 0 or negative value!")
    throw Error ("Value shouldn't be 0 or negative value!");
    }
    let area = len * brdth;
    return area;
}



