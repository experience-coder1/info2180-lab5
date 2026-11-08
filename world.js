window.addEventListener('DOMContentLoaded', () => {
    const lookupBtn = document.getElementById('lookup');
    const input = document.querySelector('input');
    const result = document.getElementById('result');

    function search(extra = '') {
        const url = `world.php?country=${encodeURIComponent(input.value.trim())}${extra}`;

        fetch(url)
            .then(res => res.text())
            .then(html => { result.innerHTML = html; })
            .catch(err => { result.textContent = 'Error: ' + err; });
    }

    lookupBtn.addEventListener('click', () => search());
});