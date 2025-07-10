function loadSection(section) {
    let path = '';

    if (section === 'main') {
        location.reload();
        return;
    } else if (section === 'images') {
        path = 'images.html';
    } else if (section === 'advanced') {
        path = 'advanced.html';
    }

    // Clean up existing h1 before injecting new content
    const oldHeader = document.querySelector('h1.imageslogo');
    if (oldHeader) oldHeader.remove();

    fetch(path)
        .then(res => res.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
}
