$(document).ready(()=>{

  const savingFields = {};

  function appendToLI(elementName, property, value) {
      const element = $('li').append(elementName);
      element[property] = value;
      return element;
  }

  function handleSubmit() {
    const handleFormSubmit = ((e) => {
      e.preventDefault();
      const date = {};
      const theList =
    });
  }

  $('#addThings').submit((e)=>{
    console.log( $('input').serializeArray());
    e.preventDefault();
    const text = $('input').val().toString();
    $('input').val('');
    // $("ul").append("<li></li>").text(text);
  });



});
