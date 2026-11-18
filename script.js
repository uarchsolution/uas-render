const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');
const form = document.getElementById('renderForm');
const result = document.getElementById('result');
const resultImg = document.getElementById('resultImg');

uploadArea.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) {
        fileName.textContent = e.target.files[0].name;
        uploadArea.style.borderColor = '#00d4ff';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const file = fileInput.files[0];
    if (!file) {
        alert('দয়া করে একটি ইমেজ আপলোড করুন');
        return;
    }

    // ডেমো: আপলোড করা ইমেজই দেখাচ্ছে
    // পরে এখানে AI API কল করবে
    const reader = new FileReader();
    reader.onload = (event) => {
        resultImg.src = event.target.result;
        result.classList.remove('hidden');
        result.scrollIntoView({ behavior: 'smooth' });
    };
    reader.readAsDataURL(file);
});