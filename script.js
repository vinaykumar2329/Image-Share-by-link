function uploadFile() {
  // Get the file input, password, and expiry date values
  const fileInput = document.getElementById("fileInput");
  const password = document.getElementById("password").value;
  const expiry = document.getElementById("expiry").value;

  if (fileInput.files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }

  // Simulate generating a shareable link
  const fileName = fileInput.files[0].name;
  let link = `https://example.com/shared/${fileName}`;

  // If password is provided, append it to the link
  if (password) {
    link += `password=${password}`;
  }

  let expiryMessage = "";
  if (expiry) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + parseInt(expiry));
    expiryMessage = `This link will expire on ${expiryDate.toLocaleDateString()}.`;
  }

  // link and the expiry message
  document.getElementById("shareableLink").value = link;
  document.getElementById("expiryMessage").textContent = expiryMessage;

  // Show the link section
  document.getElementById("linkSection").style.display = "block";
}
