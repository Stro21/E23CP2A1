function btn() {
  var element = document.getElementById("camposelector");
  var selector_value = element.value;
  if (selector_value === "") {
    alert("Debe ingresar un selector jQuery!");
  }
  try {
    var code = eval(selector_value);
  } catch(e){
    console.log("error");
  }
  console.log(selector_value);
}