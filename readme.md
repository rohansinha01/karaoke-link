# Project 2

- **Rohan Sinha**
- **Karaoke List**
- **Website to track what karaoke songs you are singing or want to sing in the future.**
- **https://github.com/rohansinha01/karaoke-link**
- **https://karaoke-list.onrender.com/**
- **https://trello.com/b/z6uODCn8/karaoke**

## List of Dependencies

##### Node Dependencies (package.json)

- bcrypt
- connect-mongo
- dotenv
- ejs
- express
- express-session
- method-override
- mongoose
- morgan

##### Frontend (if used, ex. jquery, alpine, bootstrap, htmx, etc.)

- alpine

## Route Map

Below should be a table listing the different routes in your app and their purposes.

| Route Name | Endpoint | Method | Description |
|------------|----------|--------|-------------|
| Karaoke Index | /karaoke | GET | Renders all songs on a page|
| Karaoke Show Page | /karaoke/:id | GET | Renders the info for each individual song|
| Karaoke New Page | /karaoke/new | GET | page to put info to create a new song for the list|
| Karaoke Create Page | /karaoke | POST | creates a song from the form data from the new page and then redirects back to index |
| Karaoke Edit Page | /karaoke/:id/edit | GET | page to edit the information of the song|
| Karaoke Update Page | /karoke/:id | PUT | Update the specific song, then redirect to index |
| Karaoke Delete Page | /karaoke/:id | DELETE | page to edit the information of the song|
| Karoke Seed Route | /karaoke/seed | GET | Route to get dummy data onto the page |

## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Design Mockup](./public/images/index-mobile.png)
![New Form and Update Page](./public/images/new-edit.png)

##### Desktop Design

![Desktop Design Mockup](./public/images/index-desktop.png)
![New Form and Update Page](./public/images/new-edit.png)

## ERD (Entity Relationship Diagram)

This should be a diagram showing your models and any relationships between them.

![Entity Relationship Diagram](./public/images/erd.png)

