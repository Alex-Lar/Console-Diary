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
        else if (userQuery === 'titles') {
            console.log('*******************');
            console.log('Мои записи:');
            for (let i = 0; i <= notesTitle.length - 1; i++) {
                console.log(`${i}. ${notesTitle[i]}`);
            }
            console.log('*******************');
        }
        else if (userQuery === 'note') {
            userQuery = prompt('Введите номер записи', '');
            console.log('*******************');
            console.log('Ваша записка:');
            console.log(notesTitle[userQuery]);
            console.log(notesContent[userQuery]);
            console.log('*******************');
        }
        else if (userQuery === 'delete') {
            userQuery = prompt('Введите номер записи, которою хотите удалить', '');
            console.log(`Запись "${notesTitle[userQuery]}" удалена.`);
            notesTitle.splice(userQuery, 1);
            notesContent.splice(userQuery, 1);
        }
    }
});