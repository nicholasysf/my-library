const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button=>{
    button.addEventListener('click',() =>{
        // we select each individual modal over here over the course of datasets of modal
        const modal = document.querySelector(button.dataset.modalTarget);
        // we open modal by using the function openModal(modal)
        openModal(modal);
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

closeModalButtons.forEach(button=>{
    button.addEventListener('click',() =>{
        const modal = button.closest('.modal')
        // we close modal by using the function closeModal(modal)
        closeModal(modal);
    })
})

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click',()=>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal=>{
        closeModal(modal);
    })
})

//1.Create a div element for the container
let booksDiv = document.createElement('div');
booksDiv.classList.add('book-list');
//2.Append this bookDiv as the child to our main
let mainContainer = document.querySelector('.main')
mainContainer.appendChild(booksDiv);

// 3. Add event listener on submit button
document.getElementById('submit-btn').addEventListener('click',addBooks);


//4. Create function for addBooks which acts as a callback fn
function addBooks(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    
    let bookDetails = `<div class="book-style">
        <span>Title: ${title}</span>
        <span>Author: ${author}</span>
        <span>Pages: ${pages}</span>
    </div>`;

//5. add the content to the bookDiv
    booksDiv.insertAdjacentHTML('beforeend',bookDetails);
    closeModal(modal);
}