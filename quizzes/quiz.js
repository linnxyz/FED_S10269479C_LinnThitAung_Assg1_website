const categories = [
    { id: 17, name: 'Science & Nature', image: '../images/science.jpg', description: 'Explore the wonders of our natural world' },
    { id: 18, name: 'Computing', image: '../images/computing.jpg', description: 'Test your knowledge of computer science' },
    { id: 19, name: 'Mathematics', image: '../images/maths.jpg', description: 'Challenge yourself with math problems' },
    { id: 20, name: 'Mythology', image: '../images/mythology.jpg', description: 'Discover ancient myths and legends' },
    { id: 21, name: 'Sports', image: '../images/sports.png', description: 'Put your sports knowledge to the test' }
];

let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let selectedAnswer = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    setupSearchListener();
});

function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCategories = categories.filter(category => 
            category.name.toLowerCase().includes(searchTerm)
        );
        renderCategories(filteredCategories);
    });
}

function renderCategories(categoriesToRender = categories) {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categoriesToRender.map(category => `
        <div class="category-card" onclick="selectCategory(${category.id})">
            <img src="${category.image}" alt="${category.name}" class="category-image">
            <div class="category-content">
                <h3 class="category-title">${category.name}</h3>
                <p>${category.description}</p>
            </div>
        </div>
    `).join('');
}

function selectCategory(categoryId) {
    currentCategory = categories.find(c => c.id === categoryId);
    showDifficulty();
}

function showDifficulty() {
    document.getElementById('categoriesView').classList.add('hidden');
    document.getElementById('difficultyView').classList.remove('hidden');
}

async function selectDifficulty(difficulty) {
    try {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=5&category=${currentCategory.id}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        currentQuestions = data.results;
        currentQuestionIndex = 0;
        currentScore = 0;
        selectedAnswer = null;
        showQuiz();
        renderQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('Failed to load questions. Please try again.');
    }
}

function showQuiz() {
    document.getElementById('difficultyView').classList.add('hidden');
    document.getElementById('quizView').classList.remove('hidden');
}

function renderQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const answers = [...question.incorrect_answers, question.correct_answer]
        .sort(() => Math.random() - 0.5);

    document.getElementById('questionNumber').textContent = 
        `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    document.getElementById('score').textContent = `Score: ${currentScore}`;
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answers').innerHTML = answers.map(answer => `
        <button class="answer-button" onclick="selectAnswerChoice('${answer}')">${answer}</button>
    `).join('');
    document.getElementById('nextButton').disabled = true;
    selectedAnswer = null;
}

function selectAnswerChoice(answer) {
    selectedAnswer = answer;
    document.querySelectorAll('.answer-button').forEach(button => {
        button.classList.remove('selected');
        if (button.textContent === answer) {
            button.classList.add('selected');
        }
    });
    document.getElementById('nextButton').disabled = false;
    document.getElementById('nextButton').onclick = handleNextQuestion;
}

function handleNextQuestion() {
    if (selectedAnswer === currentQuestions[currentQuestionIndex].correct_answer) {
        currentScore++;
    }

    if (currentQuestionIndex + 1 < currentQuestions.length) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showCompletion();
    }
}

function showCompletion() {
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('completionView').classList.remove('hidden');
    
    document.getElementById('finalScore').textContent = 
        `${currentScore} out of ${currentQuestions.length}`;
    
    let message;
    if (currentScore === currentQuestions.length) {
        message = "Perfect score! You're amazing! 🎉";
    } else if (currentScore >= currentQuestions.length / 2) {
        message = "Great job! Keep practicing! 👏";
    } else {
        message = "Nice try! Don't give up! 💪";
    }
    document.getElementById('completionMessage').textContent = message;
}

function showCategories() {
    document.getElementById('categoriesView').classList.remove('hidden');
    document.getElementById('difficultyView').classList.add('hidden');
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('completionView').classList.add('hidden');
    currentCategory = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    currentScore = 0;
    selectedAnswer = null;
}

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