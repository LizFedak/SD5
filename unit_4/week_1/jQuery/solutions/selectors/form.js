$(document).ready(function(){
    addFormEventListener();
});

function addFormEventListener(){
  $(':submit').click(function(event){
    event.preventDefault();
    var formValues = [];
    var $formInputs = $(':input').not(':input[type=button], :input[type=submit]');
    $formInputs.each(function(index){
        if(!$(this).val()){
          $(this).css('background-color', 'red');
        }
        else{
          $(this).css('background-color', 'white');
          formValues.push($(this).val());
          // console.log($(this).val());
        }
    });
    if(formValues.length === $formInputs.length){
        popDOM(formValues);
    }
  });
}

function popDOM(formValues){
    $('body').empty();
    formValues.forEach(function(value){
        var $newp = $('<p>').text(value);
        $('body').append($newp);
    });
}
