function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const isOpen = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item.open")
    .forEach((el) => el.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}

function lpShow() {
  document.getElementById("lpBackdrop").classList.add("lp-visible");
  document.body.style.overflow = "hidden";
  var fill = document.getElementById("lpTimerFill");
  setTimeout(function () {
    fill.style.width = "0%";
  }, 50);
  setTimeout(function () {
    if (fill.style.width === "0%") fill.style.background = "var(--green)";
  }, 10000);
}

function lpClose() {
  document.getElementById("lpBackdrop").classList.remove("lp-visible");
  document.body.style.overflow = "";
  sessionStorage.setItem("lp_shown", "1");
}

function lpSubmit() {
  var fname = document.getElementById("lp-fname").value.trim();
  var phone = document.getElementById("lp-phone").value.trim();
  if (!fname || !phone) {
    document.getElementById("lp-fname").style.borderColor = fname
      ? ""
      : "#ef4444";
    document.getElementById("lp-phone").style.borderColor = phone
      ? ""
      : "#ef4444";
    return;
  }
  document.getElementById("lpFormWrap").style.display = "none";
  document.getElementById("lpSuccess").style.display = "flex";
  sessionStorage.setItem("lp_shown", "1");
}

document.getElementById("lpBackdrop").addEventListener("click", function (e) {
  if (e.target === this) lpClose();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") lpClose();
});

var n = 10;
var cd = document.getElementById("lp-countdown");
var interval = setInterval(function () {
  n--;
  if (cd) cd.textContent = n;
  if (n <= 0) {
    clearInterval(interval);
    if (!sessionStorage.getItem("lp_shown")) lpShow();
  }
}, 1000);

document.querySelectorAll(".pw-filter").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".pw-filter").forEach(function (b) {
      b.classList.remove("pw-active");
    });
    this.classList.add("pw-active");
  });
});
