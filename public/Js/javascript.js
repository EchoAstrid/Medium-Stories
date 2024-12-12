
    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('search');
        const articles = document.querySelectorAll('.author');

        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase();

            articles.forEach(article => {
                const title = article.querySelector('h2').textContent.toLowerCase();
                const description = article.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || description.includes(query)) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none'; 
                }
            });
        });
    });

/*Readmore*/

function toggleReadMore(event) {
    event.preventDefault(); 
    const parent = event.target.closest('.author'); 
    const summary = parent.querySelector('.summary'); 
    const fullContent = parent.querySelector('.full-content');

    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block'; 
        summary.style.display = 'none'; 
        event.target.textContent = 'Read Less'; 
    } else {
        fullContent.style.display = 'none'; 
        summary.style.display = 'block';
        event.target.textContent = 'Read More'; 
    }
}
