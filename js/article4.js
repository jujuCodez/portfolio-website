function showTab(tabName) {
    const contentArea = document.getElementById('content-area');
    
    if (tabName === 'upload') {
        contentArea.innerHTML = `
            <h2>Upload HTML File</h2>
            <form action="/upload-html" method="POST" enctype="multipart/form-data">
                <input type="file" name="htmlFile" accept=".html" required>
                <button type="submit" class="btn btn-primary mt-3">Upload</button>
            </form>
        `;
    } else if (tabName === 'view') {
        fetch('/get-html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No HTML file detected');
                }
                return response.text();
            })
            .then(data => {
                contentArea.innerHTML = `<div class="html-contents">${data}</div>`;
            })
            .catch(error => {
                alert('No HTML file detected. Please upload an HTML file first.');
                console.error('Error loading HTML:', error);
            });
    }
}
