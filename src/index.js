import "./styles.css";
var i = 1;

function startCounter() {
  var value = document.getElementById("number").value;
  if (value < 0 || value > 99999) {
    alert("GADHE between 0 to 99999 bol hai english mei ");
    return;
  }
  var interval = setInterval(function () {
    if (i > value) {
      clearInterval(interval);
      i = 1;
      alert("Time Over !!!");
      document.querySelector("#first .current").innerHTML = 0;
      document.querySelector("#second .current").innerHTML = 0;
      document.querySelector("#third .current").innerHTML = 0;
      document.querySelector("#fourth .current").innerHTML = 0;
      document.querySelector("#fifth .current").innerHTML = 0;

      return;
    }
    var arr = [...(i + "")].map((n) => +n);
    var j = 1;
    for (var x = arr.length - 1; x >= 0; x--) {
      if (j == 1) {
        let r = arr[x];
        document.querySelector("#first .next").innerHTML = arr[x];
        document.querySelector("#first .next").classList.add("animate");
        setTimeout(function () {
          document.querySelector("#first .next").classList.remove("animate");
          document.querySelector("#first .current").innerHTML = r;
        }, 500);
      }
      if (j == 2) {
        let r = arr[x];
        if (document.querySelector("#second .current").innerHTML != arr[x]) {
          document.querySelector("#second .next").innerHTML = arr[x];
          document.querySelector("#second .next").classList.add("animate");
          setTimeout(function () {
            document.querySelector("#second .next").classList.remove("animate");
            document.querySelector("#second .current").innerHTML = r;
          }, 500);
        }
      }
      if (j == 3) {
        let r = arr[x];
        if (document.querySelector("#third .current").innerHTML != arr[x]) {
          document.querySelector("#third .next").innerHTML = arr[x];
          document.querySelector("#third .next").classList.add("animate");
          setTimeout(function () {
            document.querySelector("#third .next").classList.remove("animate");
            document.querySelector("#third .current").innerHTML = r;
          }, 500);
        }
      }
      if (j == 4) {
        let r = arr[x];
        if (document.querySelector("#fourth .current").innerHTML != arr[x]) {
          document.querySelector("#fourth .next").innerHTML = arr[x];
          document.querySelector("#fourth .next").classList.add("animate");
          setTimeout(function () {
            document.querySelector("#fourth .next").classList.remove("animate");
            document.querySelector("#fourth .current").innerHTML = r;
          }, 500);
        }
      }
      if (j == 5) {
        let r = arr[x];
        if (document.querySelector("#fifth .current").innerHTML != arr[x]) {
          document.querySelector("#fifth .next").innerHTML = arr[x];
          document.querySelector("#fifth .next").classList.add("animate");
          setTimeout(function () {
            document.querySelector("#fifth .next").classList.remove("animate");
            document.querySelector("#fifth .current").innerHTML = r;
          }, 500);
        }
      }
      j++;
    }
    i++;
  }, 1000);
  setInterval();
}

// [...num+''].map(n=>+n) //[1, 2, 3, 4, 5]---------------------> for converting interger into arr of its each digit
