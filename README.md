# Data Log App

This web application demonstrates basic CRUD (Create, Read, Update, Delete) operations using React, Node.js, and MySQL. You can clone this repository and set it up locally to explore its features.
This project uses Material-UI and Bootstrap for styling.

## References

- [CRUD Flow Video](https://www.youtube.com/watch?v=y5NvOade3sk)
- [Email Feature Video](https://www.youtube.com/watch?v=I4DKr1JLC50)

## Getting Started

### Step 1: Clone the Repo

Clone this repository to your local machine.

### Setting Up the Backend

1. Download and set up XAMPP locally from [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html).
2. Start the Apache Server and MySQL Database in XAMPP.
3. In your web browser, navigate to `http://localhost` and open phpMyAdmin.
4. Create a database with a table containing columns for `id` (auto-incremental), `Name`, and `Email`.
5. Replace the DB connection information in the project according to your database configuration.

### Setting Up the Frontend

1. Navigate to the "frontend" directory of the project.
2. Run the following command to install all Node.js packages:

```bash
npm install
```

### Setting Up the Email Service.

1. Create an account in https://www.emailjs.com/.
2. Follow the reference video above to setup email service and the email template. 
3. Pick your "Service ID", "Template ID" and "Public Key" and replac in "Contact.js" file. 

### Run the app.

1. Open two terminals and navigate to the "frontend" and "server" directories respectively. 
2. Run in both terminals. 
```bash
npm start
```
3. Browser will open with the web application. 

Enjoy!

- Home Page
![Alt text](/images/image-1.png)

- View User Page (Get Operation)
![Alt text](/images/image-2.png)

- Edit User Page (Put Operation)
![Alt text](/images/image-3.png)

- Create User Page (Post Operation)
![Alt text](/images/image-4.png)

- Contact Us page (Email Feature)
![Alt text](/images/image-5.png)
