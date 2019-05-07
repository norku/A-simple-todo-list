$(document).ready(() => {
  function appendToLI() {
    $("li")
      .append("Done: " + '<input type="checkbox" class="finished"><br>')
      .append('<button class="edit">Edit</button>')
      .append('<button class="delete">Delete</button></li>');
  }

  const itemList = [];
  //Add things to the to-do list
  $("#addThings").submit(e => {
    e.preventDefault();

    // const $text = $('input').val();

    //   if ($text == '') {
    //     $("#errorMessage").slideDown(200, function() {
    //       //if text field is empty an error message slides down, delays and slides up
    //       $("#errorMessage").text("That field can't be submitted empty!")
    //                         .delay(3000)
    //                         .slideUp(300);
    //     });
    //   } else {
    //   $('input').val('');
    //  $("ul").append('<li class="item">'  + $text + '<br>');
    //   itemList.push($text);
    //   appendToLI();
    //   }
    //   console.log(itemList);
    // });

    const $text = $("input").val();
    if ($text == "") {
      $("#errorMessage").slideDown(200, function() {
        //if text field is empty an error message slides down, delays and slides up
        $("#errorMessage")
          .text("That field can't be empty!")
          .delay(3000)
          .slideUp(300);
      });
    } else {
      $("input").val("");
      itemList.push($text);
    }
    console.log(itemList);
  });

  if (itemList.length > 0) {
    for (let i = 0; i < itemList.length; i++) {
      $(".main").append(itemList[i]);
      // $('ul').append('<li class="item">' + itemList[i] + '<br>');
      // appendToLI();
    }
  }
});
