
const API_HOST = process.env.API_HOST;

function fetchArticles() {
  fetch(`${API_HOST}/articles`).then();
}

function fetchComments() {
  fetch(`${API_HOST}/comments`).then();
}
