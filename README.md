# 🧪 Cypress UI Tests — marmelab React Admin Demo

## 📦 Project Overview

This project includes **UI automation** using Cypress for a React frontend, and **API automation** using Postman for a Node.js backend (Simple tool rental API).

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

# 🧪 API Test Automation — Simple Tool Rental API

## 📦 Overview

Automated API test workflow using [Simple Tool Rental API] with Postman. This suite validates cart creation, product listing, authentication, order placement, and cleanup on a Node.js backend.

---

## 🎯 Objective

To verify core API operations through chained Postman requests. The tests ensure functionality performs as expected under valid and edge-case conditions including:

- Token-based authentication
- Resource creation, update, and deletion
- Correct status codes and payload responses

---

## 📍 Test Scope & Coverage

**Features Being Tested**

- `/status`: API uptime check
- `/products`: Product listing
- `/api-clients`: Token generation
- `/carts`: Cart creation and item handling
- `/orders`: Order creation, modification, and deletion

**Test Cases**

- ✅ Health check (GET /status)
- ✅ Get token (POST /api-clients)
- ✅ Create cart and extract `cartId`
- ✅ Submit order and extract `orderId`
- ✅ Update order comment or name
- ✅ Delete order and verify removal

---

## 🔧 Tools & Justification

| Tool                          | Purpose                                                      |
| ----------------------------- | ------------------------------------------------------------ |
| **Postman**                   | REST API testing with variable injection                     |
| **Postman Collection Runner** | Automate full flow from status to cleanup                    |
| **Postman Console**           | Inspect payloads, debug variables, and verify response logic |

> Postman enables rapid, modular test setup with dynamic data extraction. Ideal for chaining requests and simulating real user flows.

---

## 🚀 Execution Instructions

1. **Open Postman**, and import the provided collection (`Simple-Tool-Rental.postman_collection.json`)
2. In **Collection → Variables**, confirm or create:
   - `authToken`: token from POST `/api-clients`
   - `cartId`, `orderId`: set dynamically from response scripts
3. Run requests in sequence using:
   - Manual execution (via UI)
   - **Collection Runner** for automated flow
4. Inspect results, status codes, and variable chaining

---

## ⚠️ Assumptions

- API endpoint is publicly available: `https://simple-tool-rental-api.click`
- Valid token generated from `/api-clients` (no CAPTCHA or OTP)
- Tool/product IDs used in cart/order creation must exist
- Backend updates reflect instantly for PATCH/DELETE
- No API stubbing — full integration test against live API

---
