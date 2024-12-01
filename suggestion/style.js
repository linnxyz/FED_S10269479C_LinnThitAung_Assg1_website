function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Get selected tags
    data.tags = Array.from(document.querySelectorAll('input[name="tags"]:checked'))
        .map(checkbox => checkbox.value);

    console.log('Form submitted:', data);
    
    document.getElementById('mainForm').classList.add('hidden');
    document.getElementById('thankYouScreen').classList.add('active');
}