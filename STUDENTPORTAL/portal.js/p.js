var courseArray = [];
window.onload = init;


function addCourse() {
    // window.location.reload(true);

    var course = {
        studentname:document.getElementById("studentName").value,
        name: document.getElementById("courseName").value,
        number:document.getElementById("courseNumber").value,
        room:document.getElementById("room").value
    };



// this condition must be true to continue
if (course.studentname !== "" && course.name !== "" && course.number !== "" && course.room !== ""){
    courseArray = JSON.parse(localStorage.getItem("course")) || [];
    courseArray.push(course);
    localStorage.setItem("course", JSON.stringify(courseArray));
    courseArray = localStorage.getItem("course");
    courseArray = JSON.parse(courseArray); 
    for (i = 0; i < courseArray.length; i++) {
        var row = enrolled.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = courseArray[i].studentname;
        cell2.innerHTML = courseArray[i].name;
        cell3.innerHTML = courseArray[i].number;
        cell4.innerHTML = courseArray[i].room;


    }
}
}

window.location.reload(true);



function clearData() {
    var secretpassword = prompt("You need the password to clear all data!", "password");

    if(secretpassword == "blueberry"){
        localStorage.clear();
        window.location.reload(true);
    }
}


function createSchedule(course){
    var table = document.getElementById("enrolled");
    var row = document.createElement("tr");

    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.innerHTML = course.studentname;
    cell2.innerHTML = course.name;
    cell3.innerHTML = course.Number;
    cell4.innerHTML = course.room;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);

    document.querySelector('.welcome #title').innerHTML = course.studentname+ "'s";
    document.querySelector('.welcome #title').style.color = "red";
    document.querySelector('.welcome #title').style.fontFamily = "cursive";
    document.querySelector('.welcome #classy').innerHTML = course.name+"class";
    document.querySelector('.welcome #classy').style.color = "blue";


}

function getCourseArray(){


    return JSON.parse(localStorage.getItem("course"));

}

function init(){
    var courseArray = getCourseArray();
    for(i=0; i<courseArray.length; i++){
        var course = courseArray[i];
        createSchedule(course);
    }
}
