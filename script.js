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