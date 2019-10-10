var addButton = document.getElementById('add');
var inputList = document.getElementById('newItem');
var itemlist = document.getElementById('todo-list');
var check = document.getElementById('item-count');
var uncheck = document.getElementById('unchecked-count');
var i = 0;
function createNewElement(item) {
   var liItem = document.createElement('li');
   var checkBox = document.createElement('button');
   checkBox.className = 'material-icons checkbox';
   checkBox.innerHTML = " <i class=\"material-icons\">\n" +
       "                   check_box_outline_blank\n" +
       "                  </i>";
   var label = document.createElement('label');
   label.innerText = item;

   var deleteButton = document.createElement('button');
    deleteButton.className = 'material-icons delete';
    deleteButton.innerHTML = "<i class=\"material-icons\">\n" +
        "                    delete_forever\n" +
        "                  </i>";

    liItem.appendChild(checkBox);
    liItem.appendChild(label);

    liItem.appendChild(deleteButton);

    return liItem;

}
function addList() {

  if(inputList.value)
  {
    var listItem = createNewElement(inputList.value);
    itemlist.appendChild(listItem);
    bindItemEvents(listItem, checkItem);
    inputList.value = "";
    i++;
    check.innerText++;
    uncheck.innerText++;

  }
}
addButton.onclick = addList;

function deleteItem() {
    var liItem = this.parentNode;
    var ul = liItem.parentNode;
    ul.removeChild(liItem);

    check.innerText--;
    uncheck.innerText--;
}
function checkItem()
{
  var liItem = this.parentNode;
  var checkBox = liItem.querySelector('button.checkbox');
  checkBox.className = "material-icons checkbox";
  checkBox.innerHTML = " <i class=\"material-icons\">\n" +
        "                   check_box\n" +
        "                  </i>";
  if(uncheck.innerText <=0)
      uncheck.innerText = 1;
  else
  uncheck.innerText--;
  bindItemEvents(liItem, unCheck);

}
function unCheck() {
   // var j = i;
    var liItem = this.parentNode;
    var checkBox = liItem.querySelector('button.checkbox');
    checkBox.className = "material-icons checkbox";
    checkBox.innerHTML = " <i class=\"material-icons\">\n" +
        "                   check_box_outline_blank\n" +
        "                  </i>";
    uncheck.innerText++;
    bindItemEvents(liItem, checkItem);

}
function bindItemEvents(liItem,checkBoxEvent)
{
  var checkBox = liItem.querySelector('button.checkbox');
  var deleteButton = liItem.querySelector('button.delete');

  checkBox.onclick = checkBoxEvent;
  deleteButton.onclick = deleteItem;
}