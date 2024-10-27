# Il Sapora Dell'Italia

This is a full-stack restaurant website created for a school project, focusing on user interactions like registration, login, and managing a food menu. The project stack includes PHP, MySQL, JavaScript, HTML, and CSS, with Webpack for bundling and TypeScript for enhanced JavaScript.

## Getting Started

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. [Download here](https://nodejs.org/).
2. **WAMP**: This project runs locally on WAMP for the backend server.
3. **Environment Variables**: Create a `.env` file to store any sensitive information.

### Setup

1. **Clone the repository**:

   -  Clone the repository into the `www/` folder of your WAMP installation to ensure proper functionality:

   ```bash
   git clone https://github.com/your-repo/international-week /path/to/wamp/www/international-week
   cd /path/to/wamp/www/international-week
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **TypeScript Compilation**:

   -  In one PowerShell terminal, start the TypeScript compiler:
      ```bash
      npm run tsc
      ```

4. **Build and Watch with Webpack**:
   -  In another PowerShell terminal, run:
      ```bash
      npm run build
      ```

### Development

-  **Development Mode**: Both `npm run tsc` and `npm run build` run in watch mode, so changes in TypeScript and other files will trigger rebuilds automatically.
-  **Additional Commands**:
   -  To compile TypeScript once:
      ```bash
      npx tsc
      ```
   -  To create a production build:
      ```bash
      npm run build --mode production
      ```

### Fetch Requests

Make sure your application correctly utilizes `window.location.origin` for fetch requests, which is why cloning into the `www/` folder is crucial for local development.

### Folder Structure

Ensure to keep the folder structure compatible with different setups, as hardcoding paths can lead to issues when collaborating.

### Author

Filip Ryan Aaron Hunslund
License: MIT

---

Feel free to modify any sections as needed!
