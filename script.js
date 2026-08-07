const newNoteButton = document.querySelector('.js-new-note-button');
const notesList = document.querySelector('.js-notes-list');

newNoteButton.addEventListener('click', createNote);


function createHeader() {
    const newHeader = document.createElement('header');
    const chevronIcon = document.createElement('i');
    const titleInput = document.createElement('input');    
    const menuButton = document.createElement('button');
    const menuIcon = document.createElement('i');
    

    newHeader.classList.add('note-header');
    
    chevronIcon.classList.add('button-icon');
    chevronIcon.setAttribute("data-lucide", "chevron-down");

    titleInput.classList.add('note-title');    
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Título");    

    menuButton.classList.add('note-options-button');

    menuIcon.classList.add('button-icon');
    menuIcon.setAttribute("data-lucide", "ellipsis-vertical");
    
    newHeader.append(chevronIcon);
    newHeader.append(titleInput);
    newHeader.append(menuButton);
    menuButton.append(menuIcon);

    return newHeader;
}    

function createNoteContent() {    
    const noteContent = document.createElement('div');
    const noteTextArea = document.createElement('textarea');  
    const footer = createNoteFooter();  

       
    noteContent.classList.add('note-content');
    noteTextArea.classList.add('note-text');    
    noteTextArea.setAttribute("placeholder", "Añade una nota...");
    
    noteContent.append(noteTextArea);

    noteContent.append(footer);
    return noteContent;
}




function createNoteFooter() {
    const noteFooter = document.createElement('footer');
    const noteDate = document.createElement('time');
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    noteFooter.classList.add('note-footer');
    
    noteDate.setAttribute("datetime", `${year}-${month}-${day}`);
    noteDate.textContent = `${day}/${month}/${year}`;

    noteFooter.append(noteDate);     
    
    return noteFooter;

}

function createNote() {
    const header = createHeader();
    const noteContent = createNoteContent();  
    const note = document.createElement('article');
    
    const noteTextarea = noteContent.querySelector('.note-text');// Obtener el textarea de contenido de la nota
    note.classList.add('note'); 

    note.append(header);    
    note.append(noteContent);
    
    notesList.append(note);


    noteTextarea.focus(); // Establecer el foco en el textarea de contenido de la nota
    
    lucide.createIcons();

};






















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
