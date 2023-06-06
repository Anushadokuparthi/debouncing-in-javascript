function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example usage:
function handleSearchQuery(query) {
  document.getElementById(
    "with-debounce"
  ).innerText = `Performing search with debounce: "${query}"...`;
  // Simulate API request or further processing
}

const debounceSearch = debounce(handleSearchQuery, 500);

document
  .getElementById("search-input")
  .addEventListener("input", function (event) {
    const searchQuery = event.target.value;
    document.getElementById(
      "without-debounce"
    ).innerText = `Performing search without debounce: "${searchQuery}"...`;

    debounceSearch(searchQuery);
  });
