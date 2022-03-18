let filterInput = document.querySelector("#filterInput");

function findValue() {
  let inputVal = filterInput.value.toUpperCase();
  let li = document.querySelectorAll("li.collection-item");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let nameVal = a.innerHTML.toUpperCase();
    if (nameVal.includes(inputVal)) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

filterInput.addEventListener("keyup", findValue);
