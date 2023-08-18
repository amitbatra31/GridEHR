// document.getElementById('uploadForm').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const fileInput = document.getElementById('fileInput');
//   const uploadStatus = document.getElementById('uploadStatus');

//   if (fileInput.files.length === 0) {
//     uploadStatus.textContent = 'Please select a file to upload.';
//     return;
//   }

//   const file = fileInput.files[0];
//   const formData = new FormData();
//   formData.append('file', file);

//   try {
//     const response = await fetch('http://localhost:5001/api/v0/add', {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();
//     const ipfsHash = data.Hash;

//     uploadStatus.innerHTML = `
//       File uploaded successfully!<br>
//       IPFS Hash: <a href="https://ipfs.io/ipfs/${ipfsHash}" target="_blank">${ipfsHash}</a>
//     `;
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     uploadStatus.textContent = 'An error occurred while uploading the file.';
//   }
// });
