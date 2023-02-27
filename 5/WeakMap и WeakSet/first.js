let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// Использую WeakSet, так как он подходит для «было ли сообщение прочитано?» через has()