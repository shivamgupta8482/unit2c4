// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchsubmit);
var matchArr = JSON.parse(localStorage.getItem("schedule"))||[];
function matchsubmit(){
    event.preventDefault();
    var matchobj={
        match1:masaiForm.matchNum.value,
        match2:masaiForm.teamA.value,
        match3:masaiForm.teamB.value,
        match4:masaiForm.date.value,
        match5:masaiForm.venue.value
    }
    matchArr.push(matchobj);
    localStorage.setItem("schedule",JSON.stringify(matchArr));

}