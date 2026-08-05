const newNoteButton = document.querySelector('.js-new-note-button');
const notesList = document.querySelector('.js-notes-list');



newNoteButton.addEventListener('click', createNote);

function createNote() {
    const note = document.createElement('article');
    const newHeader = document.createElement('header');
    const titleInput = document.createElement('input');
    const chevronIcon = document.createElement('i');
    const menuButton = document.createElement('button');
    const menuIcon = document.createElement('i');
    
    
    note.classList.add('note');

    newHeader.classList.add('note-header');

    chevronIcon.classList.add('button-icon');
    chevronIcon.setAttribute("data-lucide", "chevron-down");

    titleInput.classList.add('note-title');    
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Título");    
    
    menuIcon.classList.add('button-icon');
    menuIcon.setAttribute("data-lucide", "ellipsis-vertical");
    menuButton.classList.add('note-options-button');

    menuButton.append(menuIcon);

    newHeader.append(chevronIcon);
    newHeader.append(titleInput);
    newHeader.append(menuButton);
    
    note.append(newHeader);    

    notesList.append(note);

    lucide.createIcons();

} 





/*Esta función crea una nueva carpeta en la lista de carpetas. 
Se crea un elemento <li> y un <button> dentro de él, 
y se agregan las clases correspondientes para el estilo. 
Luego, se agrega la carpeta a la lista de carpetas en el DOM.

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
    folder.append(folderButton);
    
}

*/
