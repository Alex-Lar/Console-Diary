let startBtn = document.querySelector('#btn'),
    userQuery,
    notesTitle = [],
    notesContent = [];


startBtn.addEventListener('click', function() {
    while(userQuery !== 'quit') {
        userQuery = prompt('Введите запрос', '').toLowerCase();

        if (userQuery === 'new') {
            userQuery = prompt('Введите заголовок записи', '');
            notesTitle.unshift(userQuery);
            userQuery = prompt('Теперь вы можете писать!', '');
            notesContent.unshift(userQuery);
        }
    }
});