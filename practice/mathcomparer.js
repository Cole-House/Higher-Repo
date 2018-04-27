<html>
  <head>
    <script>
      function randomize(){
        var x= (Math.random());
        var y= (Math.random());
        if (x > y){
          document.getElementById("compare").innerHTML= "first number was higher";
        }
        else {
          document.getElementById("compare").innerHTML= "second number was higher";
        }
      }
      
    </script>
  </head>
  <body>
    <h1 id="compare"></h1>
    <button onclick="randomize()">
      compare
    </button>
  </body>
</html>
