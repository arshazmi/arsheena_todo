$('#button1').click(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos"
  }).done(function (data) {
    console.log(data);
    //Display the table
    $('#myDiv').show();
    var table = document.getElementById('myTable');
    var output = "";
    $('#myTable')
      .append(data.map(function (val) {
        output += "</tr>";
        output += "<td scope=\"row\">" + val.id + "</td>";
        output += "<td>" + val.title + "</td>";
        output += "<td>" + "<input type = 'checkbox'> " + "</td>";
        output += "</tr>\n";
      }));
    table.innerHTML += output;
  });
  //$('#button1').hide();
  //pop up alert box
  let count = 0;
  $("#myTable").on("change", ":checkbox", function () {
    var status = this.checked;
    var promise = new Promise(function (resolve, reject) {
      if (status === true)
        count++;
      else
        if (status === false)
          count--;
     // console.log(count, status);
      if (count == 5) {
        resolve("Congrats! 5 Tasks have been completed successfully!");
      }
      else
        if (count > 5) {

          reject("Total Tasks done : ")
        }
    });
    promise
      .then(function (test) {
        alert(test);

      })
      .catch(function (done) {
        alert(done + count);

      })
  });

});
//animation
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "none";
  document.getElementById("pic").style.display = "block"; 
}