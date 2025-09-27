A React practice project built with Vite + React.
This app fetches and displays user data from the JSONPlaceholder API ('https://jsonplaceholder.typicode.com/users')

Features:
  Fetches user data using axios and useEffect.
  Displays users in structured UserCards.
  Loading and error states handled gracefully.
  Search bar to filter users by name.

Conditional rendering for:
  Loading state (Loading users…)
  Error state
  Empty results (No users match your search.)

Concepts Used:
  React hooks: useState, useEffect
  Prop drilling (App → UserList → UserCard)
  Conditional rendering
  Controlled inputs (search bar)
  CSS styling with classes

Folder Structure
src/
  ├─ App.jsx
  ├─ App.css
  ├─ main.jsx
  └─ components/
       ├─ UserList.jsx
       └─ UserCard.jsx

🚀 How to Run
# Clone the repo
git clone <your-repo-url>
cd <repo-folder>

# Install dependencies
npm install

# Start dev server
npm run dev

Open http://localhost:5173 in your browser.

