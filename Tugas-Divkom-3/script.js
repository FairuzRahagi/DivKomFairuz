document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get name entered by the user
    var name = document.getElementById('name').value;
    
    // Validate the name field
    if(name.trim() === '') {
        alert('Please enter your name');
        return;
    }
    
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Hello, ' + name + '! Your random number is: ' + randomNumber + '</p>';
});

