historial = [];

function btn() {
  var element = document.getElementById("camposelector");
  var selector_value = element.value;
  if (selector_value === "") {
    alert("Debe ingresar un selector jQuery!");
  }
  try {
    var code = eval(selector_value);
    if (!code.length) {
      return element.value = '';
    }
    $(code).fadeOut('3000').fadeIn();
  } catch(e){
    element.value = '';
  }
  // console.log(selector_value);
}