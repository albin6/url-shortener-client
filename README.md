# URL Shortener

## Overview

This URL Shortener is a modern, React-based web application that allows users to create shortened versions of long URLs. Built with Vite, React, TypeScript, and styled with Tailwind CSS and shadcn/ui components, it offers a sleek and responsive user interface with smooth animations powered by Framer Motion.

## Features

- Shorten long URLs with a single click
- Copy shortened URLs to clipboard
- Display usage limits for each shortened URL
- Responsive design that works on desktop and mobile devices
- Smooth animations and transitions for a polished user experience
- Clear and intuitive user interface with a modern design

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install

   # or

   yarn install
   \`\`\`

3. Set up shadcn/ui components:
   \`\`\`
   npx shadcn@latest init
   npx shadcn@latest add button input card label tabs toast
   \`\`\`

4. Start the development server:
   \`\`\`
   npm run dev

   # or

   yarn dev
   \`\`\`

5. Open your browser and visit \`http://localhost:5173\` to see the application running.

## Usage

1. Enter a long URL in the input field.
2. Click the "Shorten URL" button.
3. The shortened URL will be displayed along with its usage limit.
4. Click the "Copy" button to copy the shortened URL to your clipboard.
5. Use the "Open Short URL" button to test the shortened link.

## Project Structure

- \`src/components/url-shortener/\`: Contains all components related to the URL shortener functionality
  - \`UrlShortener.tsx\`: Main component that orchestrates the URL shortening process
  - \`UrlInputForm.tsx\`: Handles user input for the long URL
  - \`UrlResult.tsx\`: Displays the shortened URL and related actions
  - \`HowItWorks.tsx\`: Provides instructions on how to use the URL shortener

## Customization

You can customize the appearance of the URL shortener by modifying the Tailwind CSS classes in the component files. The shadcn/ui components can also be customized by adjusting their properties or modifying their source files in your project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
