
// Hide Header on on scroll down

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("sticky").style.top = "0";
  } else {
    document.getElementById("sticky").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}


// Get the button
let mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let screenWidth = screen.width
let detail = document.getElementById("detail");
let detailCalendar = document.getElementById("detailCalendar");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let detailMobile = document.getElementById("detailMobile");
let detailMobileCalendar = document.getElementById("detailMobileCalendar");
let listMobile = document.getElementById("listMobile");
let fichaDetail = document.getElementById("fichaDetail");

function openDetail() {
  if (screenWidth < 579) {
    if (listMobile.style.display == "block") {
      listMobile.style.display = "none";
      minus.style.display = "none";
      plus.style.display = 'inline'
    } else {
      listMobile.style.display = "block";
      plus.style.display = "none";
      minus.style.display = 'inline'
    }    
    return;
  }
  if (detail.style.display == "block") {
    detail.style.display = "none";
    minus.style.display = "none";
    plus.style.display = 'inline'
  } else {
    detail.style.display = "block";
    plus.style.display = "none";
    minus.style.display = 'inline'
  }
}
window.addEventListener("resize", function () {
  screenWidth = screen.width;
  if (screenWidth < 579) {
    detail.style.display = "none";
  } else {
    listMobile.style.display = "none"
  }
});

function openDetailMobileRow() {
  if (detailMobile.style.display == "table-row") {
    detailMobile.style.display = "none";
  } else {
    detailMobile.style.display = "table-row";
  }
}

function openDetailMobileblock() {
  if (detailMobile.style.display == "block") {
    detailMobile.style.display = "none";
  } else {
    detailMobile.style.display = "block";
  }
}

function openDetailCalendar(){
  if (detailCalendar.style.display == "block") {
    detailCalendar.style.display = "none";
    minus.style.display = "none";
    plus.style.display = 'inline'
  } else {
    detailCalendar.style.display = "block";
    plus.style.display = "none";
    minus.style.display = 'inline'
  }
}
function openDetailMobileCalendar(){
  if (detailMobileCalendar.style.display == "block") {
    detailMobileCalendar.style.display = "none";
  } else {
    detailMobileCalendar.style.display = "block";
  }
}
function openDetailDates(){
  if (fichaDetail.style.display == "block") {
    fichaDetail.style.display = "none";
  } else {
    fichaDetail.style.display = "block";
  }
}