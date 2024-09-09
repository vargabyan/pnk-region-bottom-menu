document.addEventListener('click', e => {
    const btn =e.target.closest('[data-buton-close-bottom-menu]')

    if (btn) {
        const menu = btn.closest('[data-bottom-menu]')
        const btnOpenMenu = document.querySelector('[data-buton-open-bottom-menu]')

        menu.classList.remove('open')
        btnOpenMenu.classList.add('active')
    }
})

document.addEventListener('click', e => {
    const btn =e.target.closest('[data-buton-open-bottom-menu]')

    if (btn) {
        const menu = document.querySelector('[data-bottom-menu]')

        menu.classList.add('open')
        btn.classList.remove('active')
    }
})