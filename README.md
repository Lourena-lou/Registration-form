Lourena Lourenço
224087924
This lab focuses on combining HTML, CSS, and JavaScript (DOM manipulation) to create an accessible registration form with dynamic profile cards and a summary table. By completing this assignment, you will:
Build an accessible registration form using semantic HTML and CSS.
Implement inline validation and user feedback using JavaScript.
Dynamically render profile cards for each user submission.
Maintain a summary table that stays synchronized with the profile cards.

📝 Tasks
Registration Form
Inputs: First Name, Last Name, Email, Programme, Year, Interests, Photo URL.
Ensure all inputs are clearly labeled.
Validation
Required fields must not be empty.
Validate email format.
Ensure valid year selection.
Provide inline error messages with real-time updates.
Dynamic Profile Cards
On form submission, generate a profile card with the entered data.
Add a row in the summary table for each profile card.
Remove Functionality
Implement a Remove button/action.
Deleting a card must also remove the corresponding row in the summary table.

♿ Accessibility Requirements
Proper labels for all inputs.
Keyboard navigation support (tab order must be logical).
Inline error messages + an aria-live region for real-time feedback.
Maintain adequate color contrast and use readable font sizes.
📂 Project Structure 
├── index.html      # Registration form, cards, and table structure
├── style.css       # Styling for form, cards, and table
├── script.js       # DOM manipulation, validation, and dynamic rendering
└── README.md       # Documentation
