console.log("it works");
$(document).ready(function () {
  $(".Submit").click(function (event) {
    console.log("clicked button");

    var name = $(".name").val();
    var email = $(".email").val();
    var message = $(".message").val();
    var status = $(".status").val();
    statusElem.empty();

    if (name.length > 5) {
      statusElem.append("<div>name is valid</div>");
    } else {
      statusElem.append("<div>name  is not valid</div>");
    }
    if (email.length > 5 && email.includes("0") && email.includes(".")) {
      statusElem.append("<div>email is valid</div>");
    } else {
      statusElem.append("<div>email is not valid</div>");
    }
    if (message.length > 20) {
      statusElem.append("<div>message is valid</div>");
    } else {
      statusElem.append("<div>message is not valid</div>");
    }
  });
});
