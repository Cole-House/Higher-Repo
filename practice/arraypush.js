<html>
  <head>
    <script>
      var names = [];
      var i= 0;
      function addNames(){
        var blank = " ";
        var addname = document.getElementById('name1').value;
        names.push(addname);
      }
      function showNames(){
        document.getElementById('out').innerHTML = names;
      }
      
    </script>
  </head>
  <body>
    <input type="text" id='name1'>
    <button onclick='addNames()'>add</button> <br>
    <button onclick='showNames()'>show</button>
    <h1 id="out"></h1>
  </body>
</html>
