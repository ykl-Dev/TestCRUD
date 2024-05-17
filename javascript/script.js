function showForm() {

  // document.getElementById('add-article-btn').addEventListener('click', function () {
  //   document.getElementById('article-form').style.display = 'block';
  // });
  document.body.classList.add('overlay');
  document.getElementById('article-form').style.display = 'block';
}

function hideForm() {
  document.getElementById('article-form').style.display = 'none';
  document.body.classList.remove('overlay'); // Supprime la classe overlay
}

function addArticle(event) {
  event.preventDefault();

  const name = document.getElementById('article-name').value;
  const category = document.getElementById('article-category').value;
  const price = document.getElementById('article-price').value;

  const table = document.getElementById('article-table');
  const tbody = document.getElementById('article-list');
  const emptyRow = document.getElementById('empty-row');

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${category}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>
      <button class="btn btn-danger" onclick="deleteArticle(this)">Supprimer</button>
    </td>
  `;

  tbody.appendChild(newRow);
  emptyRow.style.display = 'none';
}

function deleteArticle(button) {
  const row = button.closest('tr');
  row.remove();
}