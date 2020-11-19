const cardContent = [
	{
		imageURL: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3MDE2Mn0',
		title: 'yellow Volkswagen van on road'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3MDE2Mn0',
		title: 'man in gray hoodie holding black dslr camera'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3MDE2Mn0',
		title: 'man sitting on gray dock'
	},
	{
		imageURL: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3MDE2Mn0',
		title: 'green palm tress'
	}
]

const cards = document.getElementsByClassName('card');
const reloadButton = document.getElementById('btn-reload');

// Load content
function loadContent() {
	// show loader
	showSkeletonLoader();
	let index = 0;
	// Update content
	for (let card of cards){
		setTimeout(loadCard, 2000, card, index);
		index++;
	}
}

// Show loading screen
function showSkeletonLoader() {
	for (let card of cards){
		let cardImage = card.querySelector('.card-image');
		let cardTitle = card.querySelector('.card-title');

		cardImage.classList.add('loading');
		cardImage.src = '';
		
		cardTitle.classList.add('loading');
		cardTitle.innerText = '';
	}
}

// Load a single card
function loadCard(card, index) {
	let cardImage = card.querySelector('.card-image');
	let cardTitle = card.querySelector('.card-title');

	cardImage.classList.remove('loading');
	cardImage.src = cardContent[index].imageURL;
	
	cardTitle.classList.remove('loading');
	cardTitle.innerText = cardContent[index].title;
}

loadContent();

reloadButton.addEventListener('click', loadContent);