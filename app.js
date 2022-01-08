let startBtn = document.querySelector('#btn'),
    userQuery,
    notesTitle = [],
    notesContent = [];


startBtn.addEventListener('click', function() {
    userQuery = 1;
    while(userQuery !== 'quit') {
        userQuery = prompt('Enter your request', '').toLowerCase();

        if (userQuery === 'new') {
            userQuery = prompt('Enter a title for your note', '');
            notesTitle.unshift(userQuery);
            userQuery = prompt('You can write a note', '');
            notesContent.unshift(userQuery);
        } 
        else if (userQuery === 'titles') {
            console.log('*******************');
            console.log('My notes:');
            for (let i = 0; i <= notesTitle.length - 1; i++) {
                console.log(`${i}. ${notesTitle[i]}`);
            }
            console.log('*******************');
        }
        else if (userQuery === 'note') {
            userQuery = prompt('Enter the note number', '');
            console.log('*******************');
            console.log('Note:');
            console.log(notesTitle[userQuery]);
            console.log(notesContent[userQuery]);
            console.log('*******************');
        }
        else if (userQuery === 'delete') {
            userQuery = prompt('Enter the number of the note you want to delete', '');
            console.log(`Note "${notesTitle[userQuery]}" deleted.`);
            notesTitle.splice(userQuery, 1);
            notesContent.splice(userQuery, 1);
        }
    }
});