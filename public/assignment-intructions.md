Assignment: Build a Blog Using React, React Router, and SASS
Objective:
You will create a blog application using React. This project will demonstrate your understanding of key React concepts, including state management, lifecycle methods (useEffect), conditional rendering, useRef, custom hooks, and React Router for page navigation. Additionally, you will apply SASS for styling to maintain a clean, scalable CSS structure (or tailwind if you want).

Instructions:
1. Application Structure:
    Homepage: Displays a hero, two posts, and subcontent.
    Posts: Displays all posts.
    Post Detail Page: Displays a single post with full details.
2. React Router:
    Use React Router to set up the following routes:
        /: Homepage that shows the list of posts.
        /posts: Post detail page that shows all posts.
        /posts/:id: Post detail page that shows the selected post's details.
        /contact: A page that should reroute to homepage.
        /(anywhere unknown): A static page that shows a 404 error message (NotFound).
3. Fake Data (Blog Posts):
    Use this data for your blog posts. You can import it into your app or use it in your custom hook.

4. SASS Styling (if using SASS):
    Use SASS for all styling. You should organize your SASS files as follows:
        styles/_variables.scss: Define all colors, font sizes, and other variables.
        styles/_mixins.scss: Define reusable mixins for repeated styling patterns.
        styles/_global.scss: Global styles like resets, typography, and layout.
        styles/{component}/: This folder should contain separate files for each component.
        Styling Standards:
        BEM (Block-Element-Modifier): Follow the BEM methodology for naming classes (e.g., .post-list, .post-list__item, .post-detail__header).
        Colors: Define a primary, secondary, and background color in your _variables.scss file and use these consistently throughout the app.
        Responsive Design: Use a mobile-first design approach and include media queries to ensure the blog is responsive on different devices.
        Font Sizing: Use rem units for font sizes to ensure accessibility and scalability.
        Mixins: Create mixins for common styles (e.g., flexbox layout or button styling) and reuse them across components.
5. Project Submission:
    Create a GitHub repository for your project and push all your code there.
    Ensure you're creating branches appropriately and committing your code
    regularly. Please don't delete any branches after merging them.
    Include a README.md that explains how to run the project and describes its features.
