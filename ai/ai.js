const API_KEY = ''; // Replace with your actual API key
const messagesContainer = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Comprehensive system prompt
const SYSTEM_PROMPT = `
You are a helpful AI assistant in beta version for MindQuest.
Your key responsibilities include:
- You are to answer any questions users ask as accurate as possible
- You're main target is to be a smart and creative AI study buddy for students who will answer any questions they have with their studies
- If asked, provide accurate and helpful information about our services/products
- Answer customer queries promptly and professionally
- Offer guidance on using our website or services
- Maintain a friendly and supportive tone
- Your audience are mostly students so use appropriate language
- If you don't know something, admit it honestly and direct them to contact us

Context about the company/website:
MindQuest is an online platform offering courses, quizzes, and study resources to help students enhance their learning. It provides a variety of subjects and interactive tools to reinforce knowledge, improve academic performance, and support personal growth.

Communication guidelines:
- Do not use * or ** in any case
- Be clear and concise
- Respond short but accurate
- Use a warm, professional tone
- Prioritize helpfulness and accuracy
- Avoid technical jargon when possible
- Use emojis appropriately to give a friendly vibe
`;

const conversationHistory = [
    { 
        role: 'user', 
        parts: [{ text: SYSTEM_PROMPT }] 
    }
];

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    userInput.value = '';

    // Add user message to conversation history
    conversationHistory.push({ 
        role: 'user', 
        parts: [{ text: message }] 
    });

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: conversationHistory,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 256
                }
            })
        });

        const data = await response.json();
        const aiResponse = data.candidates[0].content.parts[0].text;
        
        // Add AI response to conversation history
        conversationHistory.push({ 
            role: 'model', 
            parts: [{ text: aiResponse }] 
        });

        addMessage(aiResponse, 'ai');
    } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, something went wrong.', 'ai');
    }
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Initial welcome message
addMessage('Hello! How can I assist you today?', 'ai');

// Add this JavaScript to your resources.js file

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navBtn = document.querySelector('.nav-btn');
  
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navBtn.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-btn') && 
            !event.target.closest('.burger-menu') && 
            navBtn.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navBtn.classList.remove('active');
        }
    });
  
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-btn a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navBtn.classList.remove('active');
        });
    });
  });