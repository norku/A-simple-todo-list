$(document).ready(() => {

  const itemList = [];

//Checkbox functionality-------------------------------
  function checkedBox () {
    $('.cbx').on('change', (e) => {
      const checkbox = e.target;
      const checked = checkbox.checked;
      const listItem = checkbox.parentNode;

      if (checked) {
        listItem.className = 'clearedItem';
      } else {
        listItem.className = 'item';
      }
    });
  }

// Button functionality---------------------------------
  function clickHappens () {
    $('ul').click( (e) => {
      if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        const action = button.textContent;

        if (action === 'remove') {
          li.remove();
        }
      }
    });
  }

  //Add things to the to-do list
  $("#addThings").submit(e => {
    e.preventDefault();
    const $text = $('input').val();
    if ($text == '') {
      $("#errorMessage").slideDown(200, function() {
        //if text field is empty an error message slides down, delays and slides up
        $("#errorMessage").text("That field can't be submitted empty!")
                          .delay(3000)
                          .slideUp(300);
      });
    } else {
      itemList.push($text);
      $("ul").append(
        '<li class="item">' + $('input').val() + '<br>Done: <input type="checkbox" class="cbx"><br><button class="edit">Edit</button><button class="delete">Delete</button></li>'
        );
      $('input').val('');

    }
    console.log(itemList);
    checkedBox();
    clickHappens();
  });
});
