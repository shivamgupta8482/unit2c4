// write js code here corresponding to matches.html
var masaiArr=JSON.parse(localStorage.getItem("schedule"));
matchData(masaiArr);

var masaiArr1 = JSON.parse(localStorage.getItem("favourites"))||[];
document.querySelector("#filterVenue").addEventListener("change",sortbyplace);
function sortbyplace(){
    var sorting = document.querySelector("#filterVenue").value;
    var list = masaiArr.filter(function(elem){
        return elem.match5 == sorting;
    });
    matchData(list);

}


function matchData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
       
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
        td6.innerText = "favourites";
        td6.style.color = "green";
        td6.addEventListener("click",function(){
          favfun(elem);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });
}
function favfun(elem){
    masaiArr1.push(elem);
    localStorage.setItem("favourites",JSON.stringify(masaiArr1));
}