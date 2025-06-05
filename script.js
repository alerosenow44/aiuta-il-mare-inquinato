// Contatore firme salvate nel localStorage
let signatures = JSON.parse(localStorage.getItem('signatures')) || [];
document.getElementById('signature-count').textContent = signatures.length;

// Aggiungi una firma
function addSignature() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;

  if (name && email) {
    const newSignature = { name, email, city };
    signatures.push(newSignature);
    localStorage.setItem('signatures', JSON.stringify(signatures));
    
    // Aggiorna il contatore
    document.getElementById('signature-count').textContent = signatures.length;
    
    // Resetta il form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('city').value = '';
    
    alert('Grazie per aver firmato!');
  } else {
    alert('Inserisci almeno nome e email!');
  }
}