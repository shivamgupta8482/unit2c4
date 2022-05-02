// write js code here corresponding to favourites.html.

var masaiArr3=JSON.parse(localStorage.getItem("favourites"))||[];
matchData(masaiArr3);



function matchData(data){
    data.forEach(function(elem,index){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = elem.match1;

        var td2 = document.createElement("td");
        td2.innerText = elem.match2;

        var td3 = document.createElement("td");
        td3.innerText = elem.match3;

        var td4 = document.createElement("td");
        td4.innerText = elem.match4;

        var td5 = document.createElement("td");
        td5.innerText = elem.match5;

        var td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.addEventListener("click",function(){
          delfun(elem,index);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });
}
function delfun(elem,index){
    masaiArr3.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(masaiArr3));
    window.location.reload();
}