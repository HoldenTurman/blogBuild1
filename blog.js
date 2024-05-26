const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

// Function to create HTML elements for each article
function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    // First grid container for date, ages, genre, and stars
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const date = document.createElement('p');
    date.textContent = 'Published: ' + article.date;

    const ages = document.createElement('p');
    ages.textContent = 'Ages: ' + article.ages;

    const genre = document.createElement('p');
    genre.textContent = 'Genre: ' + article.genre;

    const stars = document.createElement('p');
    stars.textContent = 'Stars: ' + article.stars;


    infoContainer.appendChild(date);
    infoContainer.appendChild(ages);
    infoContainer.appendChild(genre);
    infoContainer.appendChild(stars);

    // Second grid container for title and description
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const title = document.createElement('h2');
    title.textContent = article.title;

    const description = document.createElement('h5');
    description.textContent = article.description;

    // Image container
    const img = document.createElement('img');
    img.src = article.imgSrc;
    img.alt = article.imgAlt;

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);

    articleDiv.appendChild(infoContainer);
    articleDiv.appendChild(contentContainer);
    articleDiv.appendChild(img);
    articleDiv.appendChild(description);

    return articleDiv;
}

// Function to display articles on the page
function displayArticles() {
    const container = document.querySelector('.grid-item:nth-child(2)'); // Assuming the second grid-item is for articles
    articles.forEach(article => {
        const articleElement = createArticleElement(article);
        container.appendChild(articleElement);
    });
}

// Call the displayArticles function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', displayArticles);

