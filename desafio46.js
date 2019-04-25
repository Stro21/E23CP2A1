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
    var length = code.length;
    var selector = code.value;
    $('.historial').append(selector_value + '<br>');
    $('.seleccionados').append(length + '<br>');

  } catch(e){
    element.value = '';
  }
  // console.log(selector_value);
}