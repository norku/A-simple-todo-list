$(document).ready(() => {
  const itemList = [];

  //Checkbox functionality-------------------------------
  function checkedBox() {
    $(".cbx").on("change", e => {
      const checkbox = e.target;
      const checked = checkbox.checked;
      const listItem = checkbox.parentNode;

      if (checked) {
        listItem.className = "clearedItem";
      } else {
        listItem.className = "item";
      }
    });
  }

  // Button functionality-------------------------------
  function clickHappens() {
    $("ul").click(e => {
      if (e.target.tagName === "BUTTON") {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        const action = button.textContent;

        if (action === "Remove") {
          li.remove();
        }
        // else if (action === "Edit") {
        //   const span = li.firstElementChild;
        //   const input = document.createElement('input');
        //   input.type = 'text';
        //   input.value = span.textContent;
        //   li.insertBefore(input, span);
        //   li.removeChild(span);
        //   button.textContent = 'Save';
        // } else if (action === "Save") {
        //   const input = li.firstElementChild;
        //   const span = document.createElement('span');
        //   span.textContent = input.value;
        //   li.insertBefore(span, input);
        //   li.removeChild(input);
        //   button.textContent = 'Edit';
        // }
      }
    });
  }

  //Add things to the to-do list------------------------
  $("#addThings").submit(e => {
    e.preventDefault();
    const $text = $("input").val();
    if ($text == "") {
      $("#errorMessage").slideDown(200, function() {
        //if text field is empty an error message slides down, delays and slides up
        $("#errorMessage")
          .text("That field can't be submitted empty!")
          .delay(3000)
          .slideUp(300);
      });
    } else {
      itemList.push($text);
      $("ul").append(
        '<li class="item">' +
          $("input").val() +
          '<br>Done: <input type="checkbox" class="cbx"><br><button class="edit">Edit</button><button class="remove">Remove</button></li>'
      );
      $("input").val("");
    }
    console.log(itemList);
    checkedBox();
    clickHappens();
  });
});
