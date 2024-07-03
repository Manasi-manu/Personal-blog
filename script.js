// Data for posts, categories, and comments
const posts = [
    { id: 1, title: "Post 1", content: "This is the content of post 1", category: "Category 1" },
    { id: 2, title: "Post 2", content: "This is the content of post 2", category: "Category 2" },
    { id: 3, title: "Post 3", content: "This is the content of post 3", category: "Category 1" },
];

const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
];

const comments = [
    { id: 1, post_id: 1, content: "This is a comment on post 1" },
    { id: 2, post_id: 2, content: "This is a comment on post 2" },
    { id: 3, post_id: 1, content: "This is another comment on post 1" },
];

// Function to render categories
function renderCategories() {
    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = "";
    categories.forEach((category) => {
        const categoryListItem = document.createElement("li");
        categoryListItem.textContent = category.name;
        categoryList.appendChild(categoryListItem);
    });
}

// Function to render posts
function renderPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";
    posts.forEach((post) => {
        const postListItem = document.createElement("li");
        postListItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p>Category: ${post.category}</p>
        `;
        postList.appendChild(postListItem);
    });
}

// Function to render comments
function renderComments() {
    const commentList = document.getElementById("comment-list");
    commentList.innerHTML = "";
    comments.forEach((comment) => {
        const commentListItem = document.createElement("li");
        commentListItem.textContent = comment.content;
        commentList.appendChild(commentListItem);
    });
}

// Render categories, posts, and comments on page load
document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderPosts();
    renderComments();
});

