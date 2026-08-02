const newNoteButton = document.querySelector('.js-new-note-button');
const notesList = document.querySelector('.js-notes-list');

newNoteButton.addEventListener('click', createNote);

function createNote() {
    const note = document.createElement('article');

    note.classList.add('note');

    notesList.append(note);

} 


/*

const newFolderButton = document.querySelector('.js-new-folder-button');
const folderList = document.querySelector('.js-folder-list');

newFolderButton.addEventListener ('click', createFolder);

function createFolder() {
    const folder = document.createElement('li');
    const folderButton = document.createElement('button');

    folder.classList.add('folder');
    folderButton.classList.add('folder-button');

    folder.append(folderButton);
    folderList.append(folder);
    
    
}

*/
