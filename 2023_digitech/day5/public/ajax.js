$("button").on("click", function () {
  const email = $("input[name=email]").val();
  $.ajax({
    url: "/test",
    type: "POST",
    dataType: "JSON",
    data: { email: email },
  })
    .done(function (json) {
      $(".result").text(json.email);
    })
    .fail(function () {
      alert("ajax failed");
    });
});
