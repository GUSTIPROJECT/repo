// Ambil elemen
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filter = document.getElementById("filter");

// Tambah To-Do
todoForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Validasi input
  if (todoInput.value.trim() === "" || dateInput.value === "") {
    alert("Harap isi kegiatan dan tanggal!");
    return;
  }

  // Buat elemen list
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${todoInput.value} - ${dateInput.value}</span>
    <button class="delete-btn">Hapus</button>
  `;

  // Hapus To-Do
  li.querySelector(".delete-btn").addEventListener("click", function() {
    li.remove();
  });

  todoList.appendChild(li);

  // Reset form
  todoInput.value = "";
  dateInput.value = "";
});

// Filter To-Do
filter.addEventListener("keyup", function() {
  const searchText = filter.value.toLowerCase();
  const items = todoList.getElementsByTagName("li");

  Array.from(items).forEach(function(item) {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchText)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
