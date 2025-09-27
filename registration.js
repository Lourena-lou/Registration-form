// registration.js
// Dynamically render profile cards and maintain a summary table on the right side of the registration container

document.addEventListener('DOMContentLoaded', function() {
  // Place right panel beside the form using flexbox, without changing user code
  const registrationContainer = document.querySelector('.Registration-container');
  const formBox = registrationContainer.querySelector('.form-box');

  // Create a flex wrapper if not present
  if (!registrationContainer.classList.contains('flex-wrapper')) {
    registrationContainer.style.display = 'flex';
    registrationContainer.style.flexDirection = 'row';
    registrationContainer.style.alignItems = 'flex-start';
    registrationContainer.classList.add('flex-wrapper');
  }

  // Create right panel for cards and summary table
  let rightPanel = document.getElementById('right-panel');
  if (!rightPanel) {
    rightPanel = document.createElement('div');
    rightPanel.id = 'right-panel';
    rightPanel.style.flex = 'none';
    rightPanel.style.width = '350px';
    rightPanel.style.marginLeft = '10px';
    rightPanel.style.display = 'flex';
    rightPanel.style.flexDirection = 'column';
    rightPanel.style.alignItems = 'flex-start';
    registrationContainer.appendChild(rightPanel);
  }

  // Card container
  let cardContainer = document.getElementById('card-container');
  if (!cardContainer) {
    cardContainer = document.createElement('div');
    cardContainer.id = 'card-container';
    cardContainer.style.display = 'flex';
    cardContainer.style.flexDirection = 'column';
    cardContainer.style.gap = '20px';
    rightPanel.appendChild(cardContainer);
  }

  // Summary table
  let summaryTable = document.getElementById('summary-table');
  if (!summaryTable) {
    summaryTable = document.createElement('table');
    summaryTable.id = 'summary-table';
      summaryTable.style.width = '380px';
    summaryTable.style.display = 'block';
    summaryTable.style.overflowX = 'auto';
  summaryTable.style.tableLayout = 'auto';
  summaryTable.style.wordBreak = 'normal';
    summaryTable.style.marginTop = '12px';
    summaryTable.style.fontSize = '13px';
    summaryTable.style.borderRadius = '16px';
    summaryTable.style.overflow = 'hidden';
    summaryTable.style.background = 'linear-gradient(90deg, #f7bee9ff 0%, #62ee22ff 100%)';
    summaryTable.style.boxShadow = '0 2px 12px #b8015022';
    summaryTable.style.border = 'none';
    summaryTable.innerHTML = `<thead style="background: #fff;">
      <tr>
        <th style="padding:12px 18px;border:none;color:#b80150;font-size:12px;">Name</th>
        <th style="padding:12px 18px;border:none;color:#b80150;font-size:12px;">Email</th>
        <th style="padding:12px 18px;border:none;color:#b80150;font-size:12px;">Programme</th>
        <th style="padding:12px 18px;border:none;color:#b80150;font-size:12px;">Year</th>
        <th style="padding:12px 18px;border:none;color:#b80150;font-size:12px;">Interests</th>
      </tr>
    </thead><tbody></tbody>`;
    rightPanel.appendChild(summaryTable);
  }
  const tbody = summaryTable.querySelector('tbody');

  // Find the form
  const form = registrationContainer.querySelector('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Gather data
    const inputs = form.querySelectorAll('input, select');
    const data = {
      name: inputs[0].value,
      email: inputs[1].value,
      programme: inputs[2].value,
      year: inputs[3].value,
      interests: inputs[4].value,
      photo: inputs[5].files[0]
    };
    // Render profile card
    renderCard(data);
    // Update summary table
    updateTable(data);
    // Reset form
    form.reset();
  });

  function renderCard(data) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.style.border = 'none';
    card.style.borderRadius = '18px';
    card.style.padding = '14px 10px 10px 10px';
    card.style.background = 'linear-gradient(135deg, #f3e6f0 0%, #e0f7fa 100%)';
    card.style.width = '180px';
    card.style.boxShadow = '0 2px 12px #b8015022';
    card.style.marginBottom = '16px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.innerHTML = `
      <h3 style="margin:0 0 6px 0;color:#b80150;font-size:18px;">${data.name}</h3>
      <p style="margin:2px 0;font-size:13px;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin:2px 0;font-size:13px;"><strong>Programme:</strong> ${data.programme}</p>
      <p style="margin:2px 0;font-size:13px;"><strong>Year:</strong> ${data.year}</p>
      <p style="margin:2px 0 10px 0;font-size:13px;"><strong>Interests:</strong> ${data.interests}</p>
      ${data.photo ? `<div style="width:100%;display:flex;justify-content:center;margin-top:8px;"><img src="${URL.createObjectURL(data.photo)}" alt="Profile Photo" style="width:60px;height:60px;border-radius:50%;object-fit:cover;border:2px solid #b80150;box-shadow:0 2px 8px #b8015022;"/></div>` : ''}
    `;
    cardContainer.appendChild(card);
  }

  function updateTable(data) {
    const row = document.createElement('tr');
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
