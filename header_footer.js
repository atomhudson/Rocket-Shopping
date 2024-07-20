// Include Header
document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const xhrHeader = new XMLHttpRequest();
    xhrHeader.open('GET', 'header.html', true);
    xhrHeader.onreadystatechange = function () {
        if (xhrHeader.readyState === 4 && xhrHeader.status === 200) {
            headerPlaceholder.innerHTML = xhrHeader.responseText;
            // Show main content after header is loaded
            document.body.style.display = 'block';
        }
    };
    xhrHeader.send();
});

// Include Footer
document.addEventListener('DOMContentLoaded', function () {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const xhrFooter = new XMLHttpRequest();
    xhrFooter.open('GET', 'footer.html', true);
    xhrFooter.onreadystatechange = function () {
        if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
            footerPlaceholder.innerHTML = xhrFooter.responseText;
            // Show main content after footer is loaded
            document.body.style.display = 'block';
        }
    };
    xhrFooter.send();
});