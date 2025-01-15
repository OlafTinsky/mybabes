document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the form from submitting and page reload

    // Get the request text from the input field
    const requestText = document.getElementById('requestInput').value;

    // Check selected AI chatbots
    const selectedChatbots = [];
    if (document.getElementById('chatGPT').checked) selectedChatbots.push('ChatGPT');
    if (document.getElementById('gemini').checked) selectedChatbots.push('Gemini');
    if (document.getElementById('cloud').checked) selectedChatbots.push('Cloud');
    if (document.getElementById('perplexity').checked) selectedChatbots.push('Perplexity');
    if (document.getElementById('grokAI').checked) selectedChatbots.push('Grok.ai');

    // Validation: Ensure a request text is provided
    if (requestText === '') {
        alert('Please enter a request!');
        return;  // Stop further execution if the input is empty
    }

    // Validation: Ensure at least one chatbot is selected
    if (selectedChatbots.length === 0) {
        alert('Please select at least one AI chatbot!');
        return;  // Stop further execution if no chatbots are selected
    }

    // Example: Log the request and selected chatbots (could be replaced by backend call)
    console.log('Sending request:', requestText);
    console.log('To selected chatbots:', selectedChatbots);

    // Display an alert to confirm submission
    alert('Your request has been submitted!');

    // Redirect to the 'results.html' page after the alert is closed
    window.location.href = "results.html";
});

// Tab navigation logic
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
});
