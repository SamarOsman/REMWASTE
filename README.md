# 🧪 Cypress UI Tests — marmelab React Admin Demo

## 📦 Project Overview

Automated end-to-end tests for [marmelab React Admin Demo](https://marmelab.com/react-admin-demo/#/), validating key user flows such as login, poster editing, and deletion using Cypress.

---

## 🚀 Quick Start

1. **Install dependencies**  
    Ensure Node.js is installed

   ```bash
   npm install

   - Launch tests
   For interactive execution:
   npx cypress open
   ```

- Or run headless via CLI:
  npx cypress run

📁 Folder Structure
/cypress
├── /integration # Core test cases (e.g., posters.spec.js)
├── /PageObjects # Modular page abstractions (LoginPage.js, PostersPage.js)
├── /fixtures # Test data (example.json with credentials)

🔐 Environment Setup
{
"url": "https://marmelab.com/react-admin-demo/#/"
}

- Valid login credentials must be defined in example.json fixture

🧪 Test Coverage

- ✅ Login with valid credentials
- ✅ Navigate to Posters module
- ✅ Edit poster description and verify DOM update
- ✅ Delete poster and confirm UI removal
  All workflows validated with:
- Element visibility
- Text verification & DOM assertions
- Input field interactions
- Page-to-page workflow testing

⚠️ Assumptions

- UI structure remains stable across runs
- App permits direct login (no CAPTCHA or OTP)
