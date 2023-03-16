function printList(list) {
    let arrayForList = list
    while (arrayForList) {
        console.log(arrayForList.value);
        arrayForList = arrayForList.next;
    }
}

function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}