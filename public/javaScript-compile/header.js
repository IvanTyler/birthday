
const $modal_main = document.querySelector('.modal-main')
const $close_modal_main = document.querySelector('.modal-main__close')

const $close_form_your_project = document.querySelector('#close-form-discuss-your-project')

const $discuss_your_project_modal = document.querySelector('.discuss-your-project-modal')


let parent = document.querySelector('.container-modal');
let elems_modal = parent?.children;

if (elems_modal) {
    for (let i = 0; i < elems_modal.length; i++) {
        elems_modal[i].addEventListener('click', (e) => e.stopPropagation())
    }
}

$close_modal_main?.addEventListener('click', () => {
    closeMainModal()

    $our_projects_open_modal?.forEach((_, i) => {
        $our_projects_videos[i].style.display = 'none';
        
        $our_projects_videos[i].pause()
    })
})

$close_form_your_project?.addEventListener('click', () => closeMainModal())

function closeMainModal() {
    for (let i = 0; i < elems_modal.length; i++) {
        elems_modal[i].style.display = 'none'
    }
    $modal_main.style.display = 'none'
}