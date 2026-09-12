# B14-A05-DevStack
My project name : B14-A05-DevStack
    
    This is real time project. Browse 12 popular technologies, compare them, and build a personalized stack in real time.
        
        Technology that we use: 
            - React.js (Vite)
            - Tailwind CSS
            - React-Toastify
            - JavaScript (ES6+)
            - JSON (for data)
        
        3 features about your project:
            1. Interactive Tech Grid — Browse 12 technologies with icons, ratings, difficulty, and category filters in a responsive grid.
            2. Your Stack Builder — Add/remove technologies to build a custom stack; duplicate adds are blocked with a toast warning.
            3. Shared Gradient Theme — One gradient (orange → pink → violet) applied across brand, headings, and buttons for instant re-theming.
        
        some question answer: 
            1. What is JSX, and why is it used in React?

                JSX is a syntax extension for JavaScript that lets me write HTML-like code inside JS files. It's used in React because it makes the UI structure much easier to read and write compared to using React.createElement for everything.

            2. What is the difference between props and state?

                Props are read-only data passed from a parent component to a child component. State is data managed inside a component itself that can change over time and cause re-renders. Props flow down; state lives locally.

            3. What does the useState hook do, and where did you use it in this project?

                useState lets a functional component remember values between renders. I used it in App.jsx for technologies, loading, and stack, and in Navbar.jsx for the mobile menu toggle.

            4. What does the useEffect hook do, and why did you need it to load the JSON data?

                useEffect runs side effects after rendering. I used it with an empty dependency array to fetch /technologies.json once when the app loads, so I can show a loading spinner until the data arrives.

            5. Why does every item in a .map() list need a unique key prop?

                React uses the key prop to identify which list items changed, were added, or removed. Without a unique key, React would re-render items inefficiently and possibly mix up states between list items. 

            6. What is conditional rendering? Show one place you used it.

                Conditional rendering means showing different UI based on a condition. I used it in StackPanel.jsx — when stack.length === 0, an empty-state message is shown, otherwise the list of stack items renders.

        7. How do you pass data from a parent to a child, and how does a child send something back?

            A parent passes data down via props. A child sends data back by calling a callback function that the parent passed as a prop. In this project, App passes onAdd, onRemove, and onRemoveAll down to children, which call them with the relevant data.