const displayBtn = document.getElementById("displayBtn");
const clearBtn = document.getElementById("clearBtn");
const showDate = document.getElementById("showDate");
const footerDate = document.getElementById("date");

clearBtn.style.display = "none";
showDate.style.display = "none";

const date = new Date().toDateString() + ", " + new Date().toLocaleTimeString();

function displayDate () {
    showDate.innerHTML = date;
    clearBtn.style.display = "flex"
    showDate.style.display = "flex";
    displayBtn.style.display = "none"
    localStorage.setItem("date", date)
}

function showLocalDate () {
   const localDate = localStorage.getItem("date");
   if(localDate) {
    showDate.innerHTML = localDate
    displayBtn.style.display = "none";
    clearBtn.style.display = "flex";
    showDate.style.display = "flex";
   }
}

function clearDate () {
    localStorage.removeItem("date");
    showDate.innerHTML = ""
    clearBtn.style.display = "none";
    displayBtn.style.display = "flex";
    showDate.style.display = "none";
    location.reload();
}

footerDate.innerHTML = new Date().getFullYear()

showLocalDate();