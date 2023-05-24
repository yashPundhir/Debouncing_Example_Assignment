// Debounce function
function debounce(func, delay) {
	let timeoutId;

	return function () {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(func, delay);
	};
}

// Simulated API call
function searchQuery() {
	const searchInput = document.getElementById("search-input");
	const searchResults = document.getElementById("search-results");
	const query = searchInput.value;

	// Simulating API call delay
	setTimeout(() => {
		searchResults.textContent = `Searching for: ${query}`;
	}, 500);
}

// Debounced search function
const debouncedSearch = debounce(searchQuery, 600);

// Event listener for input changes
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", debouncedSearch);
