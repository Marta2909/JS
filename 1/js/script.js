(function() {

  var button = document.querySelector("#submit"),
      pi = Math.PI,
      input = document.querySelector("input[type='number']");

  function countResult(e) {

    e.preventDefault();

    var number = input.value;

    if(number) {
      var result = pi.toFixed(+number),
          result_p = document.createElement("p");

      result_p.innerHTML = number + " decimal places: " + result;
      document.body.appendChild(result_p);
    }

  }

  button.addEventListener("click", countResult, false);

})();
