const newNoteButton = document.querySelector('.js-new-note-button');
const notesList = document.querySelector('.js-notes-list');


notesList.addEventListener('click', function(event) {
    const chevronButton = event.target.closest('.note-chevron-button');

        if (chevronButton) {
            const currentNote = chevronButton.closest('.note');
            currentNote.classList.toggle('is-collapsed');
        }

    const menuOptionsButton = event.target.closest('.note-options-button');

        if(menuOptionsButton) {
            
            const currentNote = menuOptionsButton.closest('.note');

            const existingMenu = currentNote.querySelector('.note-options-menu');

                if (!existingMenu) {

                    const optionsMenu = createOptionsMenu();
                    currentNote.append(optionsMenu);
                } else {
                    existingMenu.remove();
                }
                
        }    
        
    const deleteButton = event.target.closest('.note-delete-button');

        if(deleteButton) {
            const currentNote = deleteButton.closest('.note');
            const overlay = document.querySelector('.overlay');  
            const deleteModal = createDeleteModal(currentNote);
            
            document.body.append(deleteModal);
            overlay.classList.add('is-visible');              
        }

});

  
    
document.addEventListener('click',function(event){

    const cancelModalButton = event.target.closest('.modal-cancel-button');

        if(cancelModalButton) {
            const deleteModal = cancelModalButton.closest('.delete-modal');
            const deleteOverlay = document.querySelector('.overlay');

            deleteOverlay.classList.remove('is-visible');
            
            deleteModal.remove();
        }

    });   

   

newNoteButton.addEventListener('click', createNote);

function createHeader() {
    const newHeader = document.createElement('header');
    const chevronIcon = document.createElement('i');
    const chevronButton = document.createElement('button');
    const titleInput = document.createElement('input');    
    const menuButton = document.createElement('button');
    const menuIcon = document.createElement('i');

    
    newHeader.classList.add('note-header'); 
    
    chevronIcon.classList.add('button-icon');
    chevronIcon.classList.add('chevron-icon');
    chevronIcon.setAttribute("data-lucide", "chevron-down");

    chevronButton.classList.add('note-chevron-button');

    titleInput.classList.add('note-title');    
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Título");    

    menuButton.classList.add('note-options-button');

    menuIcon.classList.add('button-icon');
    menuIcon.setAttribute("data-lucide", "ellipsis-vertical");
    
    newHeader.append(chevronButton);
    chevronButton.append(chevronIcon);

    newHeader.append(titleInput);
    newHeader.append(menuButton);

    menuButton.append(menuIcon);

    return newHeader;
}    


function createOptionsMenu () {
    const optionsMenu = document.createElement('div');
    const deleteButton = document.createElement('button');

    optionsMenu.classList.add('note-options-menu');
    deleteButton.classList.add('note-delete-button');

    deleteButton.textContent = `Eliminar nota`;

    optionsMenu.append(deleteButton);


    return optionsMenu;

}

function createDeleteModal(noteToDelete) {
    
   
    const deleteModal = document.createElement('div');   
    const deleteMessage = document.createElement('p');
    const buttonsContainer = document.createElement('div');
    const cancelButton = document.createElement('button'); 
    const confirmButton = document.createElement('button'); 


    deleteModal.classList.add('delete-modal');
    buttonsContainer.classList.add('buttons-container');
    cancelButton.classList.add('modal-cancel-button');
    confirmButton.classList.add('modal-confirm-button');

    deleteMessage.textContent = `¿Estás seguro de que quieres eliminar la nota?`;    
    cancelButton.textContent = `No eliminar`;
    confirmButton.textContent = `Eliminar`;


    buttonsContainer.append(cancelButton);
    buttonsContainer.append(confirmButton);

    deleteModal.append(deleteMessage);
    deleteModal.append(buttonsContainer);
    
     confirmButton.addEventListener('click', function() {

        const overlay = document.querySelector('.overlay');

        noteToDelete.remove();
        overlay.classList.remove('is-visible');
        deleteModal.remove();


});


    return deleteModal;
}







function createNoteContent() {    
    const noteContent = document.createElement('div');
    const noteTextArea = document.createElement('textarea');  
    const noteContentInner = document.createElement('div');
    const footer = createNoteFooter();  
       
    noteContent.classList.add('note-content');

    noteTextArea.classList.add('note-text');    
    noteTextArea.setAttribute("placeholder", "Añade una nota...");

    noteContentInner.classList.add('note-content-inner');

    noteContentInner.append(noteTextArea);
    noteContentInner.append(footer);

    noteContent.append(noteContentInner);

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

     
    note.classList.add('note'); // Agregar la clase "note" al elemento <article>

    note.append(header);    // Agregar el encabezado al elemento <article>
    note.append(noteContent); // Agregar el contenido de la nota al elemento <article>
    
    

    notesList.append(note);
    
    noteTextarea.focus(); // Establecer el foco en el textarea de contenido de la nota

    lucide.createIcons();

    

};












