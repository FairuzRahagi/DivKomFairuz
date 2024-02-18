document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Validate the form
    if(name.trim() === '' || email.trim() === '') {
        alert('Please fill out all fields');
        return;
    }
    
    // If the form is valid, you can do whatever you want with the data
    console.log('Name:', name);
    console.log('Email:', email);
    
    // Here you can perform further actions like sending the data to a server using AJAX or manipulating the DOM
});
