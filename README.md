
## Run Locally

Clone the project

```bash
  git clone https://github.com/dhananjayjaiswal16/assignment.git
```

Go to the project directory

```bash
  cd assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Folder Structuring

- src/components/: Has all the component files used across this project
    - Contact: Reusable Component for setting user data on user page
    - Navbar: Reusable navbar component
    - Posts: Reusable component for displaying all posts on user page
    - Spinner: Loader component

- src/pages/
    - Login: Login page (/account/login)
    - User: User page (/account/user)
    - Post: Post page (/account/post/:post_number)

- src/redux/
    - services/: for making api calls
    - store: for setting up redux store
    - userSlice

## Tech Stack
React and Redux

