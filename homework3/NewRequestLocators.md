# New Request page locators

Locators for the interactive elements and key page structure on `http://localhost:5173/citizen/requests/new`.

## Shared page and navigation

| Element | CSS selector |
|---|---|
| Application header | `[data-testid="cs-app-header"]` |
| Brand/home link | `header[data-testid="cs-app-header"] a[href="/dashboard"]` |
| Dashboard navigation | `header[data-testid="cs-app-header"] a[data-testid="cs-nav-dashboard"]` |
| Resolved Cases navigation | `header[data-testid="cs-app-header"] a[data-testid="cs-nav-resolved-cases"]` |
| Community Ranklist navigation | `header[data-testid="cs-app-header"] a[data-testid="cs-nav-ranklist"]` |
| My Requests navigation | `header[data-testid="cs-app-header"] a[data-testid="cs-nav-my-requests"]` |
| New Request navigation | `header[data-testid="cs-app-header"] a[data-testid="cs-nav-new-request"]` |
| Language switcher | `[data-testid="cs-language-switcher"]` |
| User menu | `[data-testid="cs-user-menu-button"]` |
| Page container | `[data-testid="cs-new-request-page"]` |
| Page heading | `[data-testid="cs-new-request-page"] h1` |
| Debug action | No stable unique CSS attribute observed |
| Wizard | `[data-testid="cs-new-request-wizard"]` |
| Wizard progress indicator | `[data-testid="cs-new-request-wizard-progress"]` |
| Wizard stepper | `[data-testid="cs-new-request-wizard-stepper"]` |
| Basic Information step | `[data-testid="cs-new-request-wizard-step-0"]` |
| Location Details step | `[data-testid="cs-new-request-wizard-step-1"]` |
| Contact Information step | `[data-testid="cs-new-request-wizard-step-2"]` |
| Additional Details step | `[data-testid="cs-new-request-wizard-step-3"]` |
| Review & Submit step | `[data-testid="cs-new-request-wizard-step-4"]` |
| Cancel | `[data-testid="cs-new-request-wizard-cancel"]` |
| Back | `[data-testid="cs-new-request-wizard-back"]` |
| Next | `[data-testid="cs-new-request-wizard-next"]` |
| Submit Request | `[data-testid="cs-new-request-wizard-submit"]` |
| Completed-step progress text | No stable unique CSS attribute observed |
| Footer | `footer` |

The stepper's `data-testid` indices are zero-based. The corresponding content panels use `cs-new-request-step-1` through `cs-new-request-step-5`.

## Step 1 — Basic Information

| Element | CSS selector |
|---|---|
| Step panel | `[data-testid="cs-new-request-step-1"]` |
| Request Title | `[data-testid="cs-new-request-title"] input[name="title"]` |
| Description | `[data-testid="cs-new-request-description"] textarea[name="description"]` |
| Date of Request | `[data-testid="cs-new-request-date"] input[name="dateOfRequest"]` |
| Category menu trigger | `[data-testid="cs-new-request-category"] [role="combobox"]` |
| Category option (repeat with option text) | `[role="option"]` (scope by option name via Playwright role) |
| Priority group | `[data-testid="cs-new-request-priority"]` |
| Priority radio (Low) | `[data-testid="cs-new-request-priority"] input[name="priority"][value="LOW"]` |
| Priority radio (Medium) | `[data-testid="cs-new-request-priority"] input[name="priority"][value="MEDIUM"]` |
| Priority radio (High) | `[data-testid="cs-new-request-priority"] input[name="priority"][value="HIGH"]` |
| Priority radio (Urgent) | `[data-testid="cs-new-request-priority"] input[name="priority"][value="URGENT"]` |
| Emergency toggle | `[data-testid="cs-new-request-emergency"] input[type="checkbox"]` |
| Title character count | `[data-testid="cs-new-request-char-count-title"]` |
| Description character count | `[data-testid="cs-new-request-char-count-description"]` |

Category options observed: `Roads & Infrastructure`, `Waste Management`, `Water & Utilities`, `Parks & Recreation`, and `Public Safety`. For each, use `page.getByRole('option', { name: '<exact option text>', exact: true })`; the generic CSS `[role="option"]` matches all open options, so use the role locator or the exact-text XPath when selecting one.

## Step 2 — Location Details

| Element | CSS selector |
|---|---|
| Step panel | `[data-testid="cs-new-request-step-2"]` |
| Street Address | `[data-testid="cs-new-request-street-address"] input[name="streetAddress"]` |
| City | `[data-testid="cs-new-request-city"] input[name="city"]` |
| Postal Code | `[data-testid="cs-new-request-postal-code"] input[name="postalCode"]` |
| GPS latitude | `[data-testid="cs-new-request-latitude"] input[name="latitude"]` |
| GPS longitude | `[data-testid="cs-new-request-longitude"] input[name="longitude"]` |
| Location Description | `[data-testid="cs-new-request-location-text"] input[name="locationText"]` |
| Use Current Location | No stable unique CSS attribute observed |
| Get Address from Map | No stable unique CSS attribute observed |
| Map zoom in/out | No stable unique CSS attribute observed |
| Street Address character count | `[data-testid="cs-new-request-char-count-streetAddress"]` |
| City character count | `[data-testid="cs-new-request-char-count-city"]` |
| Postal Code character count | `[data-testid="cs-new-request-char-count-postalCode"]` |
| Location Description character count | `[data-testid="cs-new-request-char-count-locationText"]` |

## Step 3 — Contact Information

| Element | CSS selector |
|---|---|
| Step panel | `[data-testid="cs-new-request-step-3"]` |
| Preferred Contact Method menu | `[data-testid="cs-new-request-contact-method"] [role="combobox"]` |
| Contact method option (repeat with option text) | `[role="option"]` (scope by option name via Playwright role) |
| Email | `[data-testid="cs-new-request-email"] input[name="email"]` |
| Phone | `[data-testid="cs-new-request-phone"] input[name="phone"]` |
| Mailing Street Address | `[data-testid="cs-new-request-mail-address"] input[name="mailingStreetAddress"]` |
| Mailing City | `[data-testid="cs-new-request-mail-city"] input[name="mailingCity"]` |
| Mailing Postal Code | `[data-testid="cs-new-request-mail-postal"] input[name="mailingPostalCode"]` |
| Affected Services menu | `[data-testid="cs-new-request-affected-services"] input[role="combobox"]` |
| Mailing City character count | `[data-testid="cs-new-request-char-count-mailingCity"]` |
| Mailing Postal Code character count | `[data-testid="cs-new-request-char-count-mailingPostalCode"]` |

Contact methods observed: `Email`, `Phone`, `SMS`, and `Mail`. Affected service options observed: `Water Supply`, `Electrical`, `Gas`, `Internet/Cable`, and `Garbage Collection`. Use `page.getByRole('option', { name: '<exact option text>', exact: true })` after opening the relevant menu.

## Step 4 — Additional Details

| Element | CSS selector |
|---|---|
| Step panel | `[data-testid="cs-new-request-step-4"]` |
| File upload (hidden input; accepts images) | `input[data-testid="cs-new-request-image-upload"]` |
| Agree to terms checkbox | `[data-testid="cs-new-request-agree-terms"] input[type="checkbox"]` |

## Step 5 — Review & Submit

| Element | CSS selector |
|---|---|
| Step panel | `[data-testid="cs-new-request-step-5"]` |
| Submit Request | `[data-testid="cs-new-request-wizard-submit"]` |