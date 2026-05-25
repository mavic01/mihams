# Getchange Admin - Capstone Project Instructions

## Overview
You are building a simplified admin dashboard for a business called **Getchange**. The app allows a business owner to manage employees, view transactions, and handle account settings.

Work in two separate repos - one for frontend, one for backend - and integrate at the end.

---

## Screens to Build (9 only)
> Ignore all other screens in the Figma file.

1. Log In
2. Forgot Password
3. Sign Up (Step 1)
4. Sign Up II (Step 2)
5. Sign Up Complete
6. Dashboard
7. Employees
8. Employees – Add New
9. Employees – Delete

---

## App Flow

```
[Sign Up 1] → [Sign Up 2] → [Complete] → [Dashboard]
[Log In] ──────────────────────────────→ [Dashboard]
[Log In] → [Forgot Password]

[Dashboard] → [Employees] → [Add Modal / Delete Modal]
```

---

## Backend Team (NestJS + TypeORM + PostgreSQL)

### Modules to Create
- `auth` - registration, login, forgot password
- `employees` - CRUD for team members

### Endpoints

#### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/auth/register` | Register new business (2-step form data) |
| POST | `/auth/login` | Login with email & password |
| POST | `/auth/forgot-password` | Accept email, return success message |

#### Employees
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/employees` | List all employees |
| POST | `/employees` | Add new employee (send invite) |
| DELETE | `/employees/:id` | Delete an employee |

### Entities

**User** - `id`, `firstName`, `lastName`, `email`, `password`, `businessName`, `businessAddress`, `phone`, `createdAt`

**Employee** - `id`, `firstName`, `lastName`, `email`, `phone`, `role` (`admin` | `staff`), `createdAt`

### Notes
- Hash passwords with `bcrypt`
- Return a JWT token on successful login
- Keep responses simple: `{ success: true, data: ... }`
- Use `.env` for DB credentials and JWT secret

---

## Frontend Team (React)

### Pages to Build
Create one component/page per screen. Use React Router for navigation.

| Page | Route |
|------|-------|
| Sign Up Step 1 | `/register` |
| Sign Up Step 2 | `/register/business` |
| Sign Up Complete | `/register/complete` |
| Log In | `/login` |
| Forgot Password | `/forgot-password` |
| Dashboard | `/dashboard` |
| Employees | `/employees` |

### Key Behaviours
- **Sign Up** is a 2-step form. Store step 1 data in state and submit everything on step 2.
- **Dashboard** displays static/hardcoded stats for now. The keypad is UI-only.
- **Employees** page fetches and lists employees from the API.
- **Add Employee** opens a modal with a form. On submit, call `POST /employees`.
- **Delete Employee** opens a confirmation modal. On confirm, call `DELETE /employees/:id`.
- Protect `/dashboard` and `/employees` routes - redirect to `/login` if no token.

### Notes
- Store the JWT token in `localStorage` after login
- Use `axios` for all API calls
- Match the Figma design as closely as you can - colours, spacing, layout
- Keep components small and reusable (e.g. `Modal`, `InputField`, `Button`)

---

## Integration Checklist
- [ ] Backend running on `http://localhost:3000`
- [ ] Frontend `.env` has `VITE_API_URL=http://localhost:3000`
- [ ] Login returns a token and frontend stores it
- [ ] Employees page loads real data from the API
- [ ] Add and Delete actions reflect immediately in the UI

---

## What to Ignore
- Card / Wallet screens
- Settings screens
- Airtime / Recharge screens
- Profile Dropdown
- Wallet History

---

*Keep it simple. Get it working first, then make it look good.*