if (window.innerWidth < 900) {
  document.querySelectorAll('.sidebar .julian-link').forEach(function (el) {
    el.addEventListener('click', function () {
      document.querySelector('.sidebar-mini').classList.remove('sidebar-open')
      document.querySelector('.sidebar-mini').classList.add('sidebar-collapse')
    })
  })
}