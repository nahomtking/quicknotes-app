const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const searchInput = document.querySelector("#search-input");

let notes = [];

function render() {
    notesList.textContent = "";

    notes.forEach(function(note) {
        const listItem = document.createElement("li");
        listItem.classList.add("note-card");
        listItem.classList.add(`category-${note.category}`);

        const noteText = document.createElement("p");
        noteText.classList.add("note-text");
        noteText.textContent = note.text;

        const categoryLabel = document.createElement("span");
        categoryLabel.classList.add("note-category");
        categoryLabel.textContent = note.category;

        const noteDate = document.createElement("span");
        noteDate.classList.add("note-date");
        noteDate.textContent = note.createdAt;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        listItem.appendChild(noteText);
        listItem.appendChild(categoryLabel);
        listItem.appendChild(noteDate);
        listItem.appendChild(deleteButton);

        notesList.appendChild(listItem);
    });
}

noteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = noteInput.value.trim();
    const category = noteCategory.value;

    if (text === "") {
        return;
    }

    const newNote = {
        id: Date.now(),
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };

    notes.push(newNote);

    render();

    noteInput.value = "";
});