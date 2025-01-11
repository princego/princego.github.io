let usersSection = document.querySelector(".users-section");
//usersSection.style.display = "none";

let isShow = true;
function showHideUsers() {
    if (isShow) {
    usersSection.style.display = "none";
    isShow = false;
    }   else {
    usersSection.style.display = "block";
    isShow = true;
    }
}

