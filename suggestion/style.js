function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Get selected tags
    data.tags = Array.from(document.querySelectorAll('input[name="tags"]:checked'))
        .map(checkbox => checkbox.value);

    // Here you would typically send this data to your backend
    console.log('Form submitted:', data);
    
    // Show thank you screen
    document.getElementById('mainForm').classList.add('hidden');
    document.getElementById('thankYouScreen').classList.add('active');
}