const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
// console.log(forwardBtn)
// console.log(backBtn)
backBtn.addEventListener('click', gotoURL);
forwardBtn.addEventListener('click', gotoURL);

function gotoURL(e) {
    if (e.target.id === "backBtn") {
        history.back();
    }else {
        history.forward();
    }
}