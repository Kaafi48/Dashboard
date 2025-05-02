

let teamMembers = document.querySelectorAll(".tab")

teamMembers.forEach(tab => {
  tab.addEventListener('click', () => {
    // remove active tab
    teamMembers.forEach(t => t.classList.remove('active'))

    // add active to clicked tab
    tab.classList.add('active')
  })
})
