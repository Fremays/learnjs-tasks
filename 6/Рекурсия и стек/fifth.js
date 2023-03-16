function printList(list) {

    let arrReversed = [];
    let arrayForList = list;

    while (arrayForList) {
        arrReversed.push(arrayForList.value);
        arrayForList = arrayForList.next;
    }

    for (let i = arrReversed.length - 1; i >= 0; i--) {
        console.log(arrReversed[i]);
    }
}


function printList(list) {
    if (list.next) {
        printList(list.next);
    }
    console.log(list.value);
}