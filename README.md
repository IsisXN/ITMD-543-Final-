# Photography Portfolio – Vue.js Web Application

## Project Overview
This project is a photography portfolio website built using Vue.js. It includes an About Me page, a dynamic photography gallery with modal previews, and a bookings page where users can submit session requests. The website is designed to be responsive, accessible, visually appealing, and easy to maintain. The gallery system is powered by JSON.

## Technologies Used
- Vue.js (Composition API)
- Vite
- HTML5 & CSS3
- JavaScript (ES6)
- JSON for gallery data
- Git & GitHub for version control

## Features
- Fully responsive layout (desktop + mobile)
- Dynamic photo gallery
- 4x5 portrait-style gallery grid
- Search bar for filtering photos by title or keywords
- Tag-based filtering system
- Large modal viewer for each photo
- Booking form with required field validation
- Sticky navigation bar for easy page access
- Reusable UI components (PhotoCard, PhotoModal)
- Consistent styling and color theme across all pages

## Gallery Management
All gallery images are stored in:
Photo metadata (title, description, tags, src path) is stored in:
src/pages/Gallery.jsx (photo objects reference images stored in public/images for Netlify compatibility)

## Project Structure
/public
images
/src
/assets
styles.css
photos.json
/components
Navbar.vue
Footer.vue
PhotoCard.vue
PhotoModal.vue
/pages
AboutMe.vue
Gallery.vue
Bookings.vue
/router
index.js
/store
useBookingsStore.vue
/App.vue
/main.js

## Lessons Learned
Throughout this project, I learned:
- How to build a multi-page web application using Vue.js
- How to structure components and pass props effectively
- How computed properties and refs work in Vue’s Composition API
- How to manage state for searching, filtering, and opening modals
- How to debug Vue template errors and CSS layout problems
- How to maintain consistent UI styling with reusable classes
- How to use GitHub for commits, version tracking, and documentation
- The importance of planning layout (especially for responsive grids)

## Future Scope
This project can continue to grow. Planned enhancements include:
- Backend API for storing booking requests (Node.js/Express)
- Admin dashboard for uploading new photos directly from the browser
- User authentication system for admin access
- Additional gallery categories with filtering and sorting
- Review/rating system for clients
- Animation enhancements across pages
- SEO improvements for better portfolio visibility

## Author
**Isis Navarro – Photography & Media Portfolio**  
Designed and developed as part of a web application project.
