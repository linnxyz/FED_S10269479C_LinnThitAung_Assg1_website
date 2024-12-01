# MindQuest
**Your Ultimate Study Companion – Making Learning Fun and Effective**
MindQuest is an innovative online platform designed to help students enhance their learning through:
- Quizzes
- Online Courses
- Study Resources

Whether you're preparing for exams, sharpening your memory, or simply finding the best study tools out there, MindQuest serves as an All-In-One tools for everything you need. *The best part?* MindQuest's collection of study resources were handpicked by students all over the world! ***AI, Tools, Productivity Apps, Student Deals? YOU NAME IT!***

## Project RoadMap
**Current Website**
- ***Purpose:*** A preview of MindQuest to introduce interactive quizzes and study resources.
- ***Goal:*** Make learning easier and encourage users to join the waitlist for the upcoming mobile app to get full access.

**Coming Soon: Mobile App**
- ***New Features:*** A preview of MindQuest to introduce interactive quizzes and study resources.
  - Intuitive online courses for deeper learning.
  - Expanded quizzes across more subjects.
  - Progress tracking tools to measure improvement.
  - Community features like leaderboards and study groups.
  
**The Vision**
The website is just the beginning. The mobile app will bring the full MindQuest experience, combining innovation with education to make learning more enjoyable than ever!

## Design Process
1. Understanding the Audience
   Designed for students aiming to aid in their studies.
2. Wireframes
   Wireframes were created to plan the layout of the homepage and user dashboard.
3. Interactive Elements
   Engaging features were prioritized to keep users motivated throughout their learning journey.
4. Responsive Design
   Ensured usability and consistency across all devices—desktop, tablet, and mobile.

The initial Figma design file for this design can be viewed [here](https://www.figma.com/design/SAZ6O0SVU5z0DLhNuSPxkO/Initial-Project-Design?node-id=0-1&t=424BjaZLTLAzWpgK-1).


## User Stories  

1. **As a student**, I want to take subject-specific quizzes, so that I can test my knowledge and identify areas for improvement.  
2. **As a student**, I want access to curated study resources, so that I can learn more effectively without wasting time searching.    
3. **As a busy learner**, I want a responsive platform that works on both desktop and mobile, so that I can study anytime, anywhere.  
4. **As a prospective app user**, I want to explore trial features on the website, so that I can decide if I want to join the mobile app waitlist.  
5. **As a competitive student**, I want to compare my quiz scores with others, so that I can gauge my performance.  
6. **As a new user**, I want clear navigation and quick access to features, so that I can start learning without confusion.  
7.  **As an advanced learner**, I want access to detailed online courses, so that I can deepen my understanding of complex topics. 


## Features
### Existing Features
- [x] **User Waitlist for Mobile App**: Allows users to join the waitlist for the upcoming MindQuest mobile app, giving them early access to exclusive updates and features. The waitlist form includes a short survey to better understand how users found out about MindQuest and features they might need, and lastly their email address to notify them when the app is out.  
  
- [x] **Study Resources**: Provides curated study resources like AI, Tools, Productivity Apps, Student Deals to help students improve their academic performance and get the best out of their student life.

- [x] **Quizzes**: Provide users to take quizzes on various topics on 3 level of difficulties, pulled from the largest trivia database availible.

- [x] **Music**: A collection of playlists that were made by other students to better focus on the studies. Different type of musics available for users with different preferences.

- [x] **AI-powered Tools**: AI Chat integrated with the most smartest AI out there to answer any questions users might have.

- [x] **Suggestions form**: Allows users to suggest the study resources they find useful that are not yet in MindQuest's database by letting them fill in a form including the resource name, link, description, and their email address.

### Features Left to Implement

- [ ] **Progress Tracker:** A feature to allow students to track their academic progress over time, helping them identify areas of strength and areas that need improvement, boosting motivation and focus.

- [ ] **Playlist Recommendation:** A feature to allow students to recommend their favorite playlists to other students by uploading their playlist links.

- [ ] **Study Buddy Finder:** Future plans include allowing users to select quiz topics, difficulty levels, and categories for a more tailored trivia experience.

- [ ] **Knowledge Bar:** A newsfeed type of page that will display latest news, knowledgable facts, and study/general life tips to help users easily learn new things and keep in touch with the world.


## Technology Used  

* **Spotify API**
  * The Spotify API is integrated into the platform to provide playlists designed for studying. A request is made to Spotify API with a search keyword (eg. study, coding, lofi). The API returns a JSON response, containing playlist name, description, track list, cover image and the link to it. This data is parsed and displayed dynamically on the website using JavaScript.

* **Gemini API for Chat**
  * The Gemini API is used to power the AI chat feature. When a users sends a message, the website sends a POST request to the Gemini API's messaging endpoint, which processes the message and sends it to the intended recipient (the address of the first message sender). Before the POST request, an initial configuration request is sent to the API to tell the AI the situation it's in and how to behave. It looks something like this:
  ```javascript
  const SYSTEM_PROMPT = 
    You are a helpful AI assistant in beta version for MindQuest.
    Your key responsibilities include:
    You are to answer any questions users ask as accurate as possible
    You're main target is to be a smart and creative AI study buddy for students who...
  ```

* **DOM Manipulation from JSON Files**: To display dynamic study resources, JSON files are used to store and manage data. Using DOM manipulation, the platform dynamically load and display quizzes, articles, and other resources. This method ensures that the content is updated efficiently without requiring manual changes to the HTML structure.

* **Lottie Animations**: Lottie animations are used especially in the home page to enhance the user experience with smooth, interactive animations. These lightweight animations are implemented using Lottie files, which are scalable and easy to integrate, adding a visually engaging layer to the platform without compromising performance.


## Testing
### 1. **Homepage**
   - **Test 1**: Verify that the homepage loads correctly on all devices (desktop, tablet, mobile).
   - **Test 2**: Check if the "Join the Waitlist" button works and redirects to the waitlist form.
   - **Test 3**: Test responsiveness of images, texts, and buttons on different screen sizes.
   - **Test 4**: Ensure Lottie animations play smoothly without glitches.

### 2. **Quizzes Page**
   - **Test 1**: Verify that quizzes load properly and each question is displayed correctly.
   - **Test 2**: Check if answers are recorded, and the final score is calculated and displayed.
   - **Test 3**: Test that users can search quizzes by topic.
   - **Test 4**: Check if quizzes are accessible (e.g., no broken links, loading issues).

### 3. **Music Playlist Page**
   - **Test 1**: Verify that playlists load from Spotify via the API.
   - **Test 2**: Check if playlists are categorized by study-related themes (e.g., concentration, relaxation).
   - **Test 3**: Test that clicking a playlist opens it on Spotify.
   - **Test 4**: Ensure that the page layout adjusts to screen sizes and remains functional.

### 4. **Study Resources Page**
   - **Test 1**: Verify that resources (AI tools, study articles) are loaded from JSON correctly and displayed.
   - **Test 2**: Test searching and filtering options for study resources.
   - **Test 3**: Ensure that each resource has the correct description and tags, and is linked to external sources if necessary.
   - **Test 4**: Ensure all resources are accessible without errors or missing content (e.g., images, tags).

### 5. **Footer & Links**
   - **Test 1**: Ensure that all footer links are functional.
   - **Test 2**: Check for broken links throughout the website.
   - **Test 3**: Verify that the contact information is correctly displayed.

### 6. **Overall Usability and Performance**
   - **Test 1**: Verify that all interactive elements (buttons, links, forms) are responsive and function as expected.
   - **Test 2**: Ensure the website performs well under heavy load (especially when multiple users access quizzes and resources).
   - **Test 3**: Test accessibility (keyboard navigation, screen reader compatibility, etc.).
   - **Test 4**: Check browser compatibility (Chrome, Firefox, Safari, Edge).

### 7. **AI Chat**
  - **Test Case 1**:  
    - **Description**: Verify that the AI chat interface loads properly and is interactive when the user clicks on the "Chat" button.  
    - **Expected Result**: The chat window should appear immediately, allowing the user to type and receive responses.
  - **Test Case 2**:  
    - **Description**: Verify that the AI follows the initialization prompt sent in the first API request.
    - **Expected Result**: The AI should strictly follow the rules set for it without breaking them.
  - **Test Case 3**:  
    - **Description**: Ensure that the AI responds within an acceptable time frame (e.g., 2-3 seconds) after the user sends a message.  
    - **Expected Result**: The AI should respond promptly, without significant delays, maintaining a smooth chat experience.
  - **Test Case 4**:  
    - **Description**: Test that the AI is able to filter inappropriate language or queries and respond accordingly.  
    - **Input**: "This is dumb!"  
    - **Expected Result**: The AI should either ignore the offensive message or politely guide the user to maintain respectful language.
  - **Test Case 5**:  
    - **Description**: Test that the AI can handle casual or non-study-related queries in a conversational manner.  
    - **Input**: "What's the weather like today?"  
    - **Expected Result**: The AI should respond with a polite and friendly response, acknowledging the question without providing study content.
  

## Credits
### Media
- The images used in this site were obtained from [Pexels](https://www.pexels.com) and [Google](https://www.google.com).
- Icons were obtained from [Flaticon](https://www.flaticon.com) and [Figma](https://www.figma.com).

### Acknowledgements
- The knowledge and skills I gathered to build this website are from [w3schools.com](https://www.w3schools.com), [LinkedIn Learning](https://www.linkedin.com/learning/), and [ChatGPT](https://chat.openai.com) and [Claude](https://claude.ai) for the coding assistance.
- I received inspirations for this project from [Dribbble](https://dribbble.com) and [Pinterest](https://www.pinterest.com) for the design and layout.


