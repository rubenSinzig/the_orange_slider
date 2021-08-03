document
  .querySelector(".compare #compare-ip")
  .addEventListener("input", function (e) {
    document.querySelector(".compare .before .after").style.width =
      +e.target.value + "px";
  });

document
  .querySelector(".compare #compare-ip")
  .addEventListener("change", function (e) {
    document.querySelector(".compare .before .after").style.width =
      +e.target.value + "px";
  });

const getYear = document.querySelector(".year");
const year = new Date().getFullYear();
getYear.innerHTML = year;
