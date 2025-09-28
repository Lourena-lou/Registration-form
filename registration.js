// Dynamically render profile cards and maintain a summary table below the registration container

document.addEventListener('DOMContentLoaded', function() {
  const registrationContainer = document.querySelector('.Registration-container');
  const formBox = registrationContainer.querySelector('.form-box');

  // Card container (dentro do Registration-container)
  let cardContainer = document.getElementById('card-container');
  if (!cardContainer) {
    cardContainer = document.createElement('div');
    cardContainer.id = 'card-container';
    cardContainer.style.display = 'flex';
    cardContainer.style.flexDirection = 'column';
    cardContainer.style.gap = '20px';
    registrationContainer.appendChild(cardContainer);
  }

  // Summary table (fora, no results-container)
  let summaryTable = document.getElementById('summary-table');
  if (!summaryTable) {
    summaryTable = document.createElement('table');
    summaryTable.id = 'summary-table';
    summaryTable.style.width = '740px';
    summaryTable.style.marginTop = '20px';
    summaryTable.style.borderCollapse = 'collapse';
    summaryTable.style.fontSize = '13px';
    summaryTable.style.borderRadius = '12px';
    summaryTable.style.overflow = 'hidden';
  summaryTable.style.background = '#fff';
    summaryTable.style.boxShadow = '0 2px 12px #b8015022';
    summaryTable.style.border = '2px solid #5e9f64';
    summaryTable.innerHTML = `
      <thead style="background: linear-gradient(90deg, #fff 0%, #b80150 100%); color: #fff;">
        <tr>
          <th style="padding:10px 16px;border:2px solid #b80150;color:#fff;font-size:13px;background:linear-gradient(90deg, #5e9f64 0%, #b80150 100%);">Name</th>
          <th style="padding:10px 16px;border:2px solid #b80150;color:#fff;font-size:13px;background:linear-gradient(90deg, #5e9f64 0%, #b80150 100%);">Email</th>
          <th style="padding:10px 16px;border:2px solid #b80150;color:#fff;font-size:13px;background:linear-gradient(90deg, #5e9f64 0%, #b80150 100%);">Programme</th>
          <th style="padding:10px 16px;border:2px solid #b80150;color:#fff;font-size:13px;background:linear-gradient(90deg, #5e9f64 0%, #b80150 100%);">Year</th>
          <th style="padding:10px 16px;border:2px solid #b80150;color:#fff;font-size:13px;background:linear-gradient(90deg, #5e9f64 0%, #b80150 100%);">Interests</th>
        </tr>
      </thead><tbody></tbody>
    `;

    // insere a tabela no results-container (fora do formulário)
    document.getElementById('results-container').appendChild(summaryTable);
  }

  const tbody = summaryTable.querySelector('tbody');
  const form = registrationContainer.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // pega valores dos inputs
    const inputs = form.querySelectorAll('input, select');
    const data = {
      name: inputs[0].value,
      email: inputs[1].value,
      programme: inputs[2].value,
      year: inputs[3].value,
      interests: inputs[4].value,
      photo: inputs[5].files[0]
    };

    // Create a unique id for this card and row
    const uniqueId = 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    // Renderiza card (dentro)
    renderCard(data, uniqueId);
    // Atualiza tabela (fora)
    updateTable(data, uniqueId);
    // Reset form
    form.reset();
  });

  function renderCard(data) {
  const card = document.createElement('div');
  const uniqueId = arguments[1];
  card.className = 'profile-card';
  card.style.border = 'none';
  card.style.borderRadius = '20px';
  card.style.padding = '14px 10px 10px 10px';
  card.style.background = 'linear-gradient(135deg, #f3e6f0 0%, #e0f7fa 100%)';
  card.style.width = '260px';
  card.style.boxShadow = '0 2px 12px #b8015022';
  card.style.marginBottom = '16px';
  card.style.display = 'flex';
  card.style.flexDirection = 'column';
  card.style.alignItems = 'center';
  card.setAttribute('data-id', uniqueId);
  card.innerHTML = `
      <h3 style="margin:0 0 6px 0;color:#b80150;font-size:18px;">${data.name}</h3>
      <p style="margin:2px 0;font-size:13px;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin:2px 0;font-size:13px;"><strong>Programme:</strong> ${data.programme}</p>
      <p style="margin:2px 0;font-size:13px;"><strong>Year:</strong> ${data.year}</p>
      <p style="margin:2px 0 10px 0;font-size:13px;"><strong>Interests:</strong> ${data.interests}</p>
      ${data.photo ? `<div style=\"width:100%;display:flex;justify-content:center;margin-top:8px;\"><img src=\"${URL.createObjectURL(data.photo)}\" alt=\"Profile Photo\" style=\"width:60px;height:60px;border-radius:50%;object-fit:cover;border:2px solid #b80150;box-shadow:0 2px 8px #b8015022;\"/></div>` : ''}
      <button class="remove-btn" style="margin-top:12px;padding:6px 18px;border-radius:16px;background:#b80150;color:#fff;border:none;cursor:pointer;font-size:13px;">Remove</button>
    `;
    cardContainer.appendChild(card);
    card.querySelector('.remove-btn').addEventListener('click', function() {
      card.remove();
      const row = tbody.querySelector(`tr[data-id='${uniqueId}']`);
      if (row) row.remove();
    });
  }

  function updateTable(data) {
  const uniqueId = arguments[1];
  const row = document.createElement('tr');
  row.setAttribute('data-id', uniqueId);
  row.innerHTML = `
      <td style="font-size:12px;min-width:60px;">${data.name}</td>
      <td style="font-size:12px;min-width:60px;">${data.email}</td>
      <td style="font-size:12px;min-width:60px;">${data.programme}</td>
      <td style="font-size:12px;min-width:40px;">${data.year}</td>
      <td style="font-size:12px;min-width:60px;">${data.interests}</td>
    `;
    tbody.appendChild(row);
  }
});