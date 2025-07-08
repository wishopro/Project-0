function loadSection(section) {
    let path = '';

    if (section === 'main') {
        location.reload(); // Simple way to reset to main
        return;
    } else if (section === 'images') {
        path = 'images.html';
    } else if (section === 'advanced') {
        path = 'advanced.html';
    }

    fetch(path)
        .then(res => res.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
}
