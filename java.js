document.getElementsByClassName("inside")[0].hidden = true;

document.getElementsByClassName("buttonfront")[0].onclick = e => {
  document.querySelector(".front").style.animation = "flip 1s linear";

  setTimeout(function() {
    document.querySelector(".insidel").style.animation = "";
    document.getElementsByClassName("inside")[0].hidden = false;
    document.getElementsByClassName("front")[0].hidden = true;
  }, 700);
};

document.getElementsByClassName("buttoninside")[0].onclick = e => {
  document.querySelector(".insidel").style.animation = "flipin 1s linear";

  setTimeout(function() {
    document.querySelector(".front").style.animation = "";
    document.getElementsByClassName("inside")[0].hidden = true;

    document.getElementsByClassName("front")[0].hidden = false;
  }, 700);
};
