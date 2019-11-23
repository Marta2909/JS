(function() {

  var button = document.querySelector("button[type='submit']");

  function showFibonnaci(e) {

    e.preventDefault();

    var fromInput = document.querySelector("input[type='number']");

    if(fromInput) {
      var max = fromInput.value,
          result = [1,0],
          next_sum = result[0] + result[1];

      while (next_sum + result[1] < +max) {
        result.unshift(next_sum + result[1]);
        next_sum = result[0];
      }

      var result_p = document.createElement("p");

      result_p.innerHTML = "Fibonacci up to " + max + ": " + result.reverse().join(', ');
      document.body.appendChild(result_p);
    }
  }

  button.addEventListener('click', showFibonnaci, false);

})();
