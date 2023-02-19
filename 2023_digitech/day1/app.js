$(function () {
  var obj = [{ area: "서울" }, { area: "부산" }, { area: "전주" }];

  $(obj).each(function (i, o) {
    console.log(i + ":", o);
  });
  console.log("==== The End 1 ====");

  $.each($("#menu2 li"), function (i, o) {
    console.log(i + ":", o);
  });
  console.log("==== The End 2 ====");

  $.each($("#menu2 li"), function (i) {
    console.log(i + ":", $(this));
  });
});
