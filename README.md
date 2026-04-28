# Leadrat Automation Assignment

## Tech Stack

* Playwright
* JavaScript
* Page Object Model (POM)
* Faker (for dynamic test data)

---

## Covered Use Case

### 1. Lead Form Submission

* Navigate to Leadrat website
* Open "Get Quote" form
* Fill form using dynamic data (name, email, phone, company)
* Submit the form
* Validate successful submission via URL redirection

---

## Advanced Validation

### API Validation

* Captured network request using Playwright
* Validated backend response using `response.ok()` (handles 200/204)
* Ensures end-to-end validation (UI + API)

---

## Framework Design

This framework follows **Page Object Model (POM)**:

* **Test Layer** → Handles test flow and data
* **Page Layer** → Handles UI interactions
* **Utils Layer** → Handles dynamic data generation

---

## Key Features

* Dynamic test data using Faker + timestamp
* Stable locators using ID strategy
* API + UI combined validation
* Screenshot, Video, and Trace enabled
* HTML reporting with Playwright

---

## How to Run

```bash
npm install
npx playwright install
npx playwright test
```

---

## Report

To view test report:

```bash
npx playwright show-report
```

---

## Notes

* API returns **204 (No Content)** for successful form submission
* Validated using `response.ok()` instead of fixed status code
* Framework is designed to be scalable and maintainable

---