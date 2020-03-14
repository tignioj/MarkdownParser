window.addEventListener('load', function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/1.md");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let html = markdownParse(xhr.responseText)
            document.getElementById("content").innerHTML = html;
        } else {
            document.getElementById("content").innerText = xhr.readyState + "|" + xhr.status;
        }
    };
    xhr.send();
});
