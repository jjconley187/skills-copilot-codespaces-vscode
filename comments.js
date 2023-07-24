//create web server
const express = require('express');
const app = express();
const port = 3000;

//import data
const data = require('./data');

//use express
app.use(express.static('public'));

//set view engine
app.set('view engine', 'ejs');

//route to home page
app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home',
        data: data,
        page: 'home'
    });
});

//route to about page
app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About',
        data: data,
        page: 'about'
    });
});

//route to contact page
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact',
        data: data,
        page: 'contact'
    });
});

//route to comments page
app.get('/comments', (req, res) => {
    res.render('pages/comments', {
        title: 'Comments',
        data: data,
        page: 'comments'
    });
});

//route to comments page
app.get('/comments/new', (req, res) => {
    res.render('pages/new', {
        title: 'New Comment',
        data: data,
        page: 'new'
    });
});

//route to comments page
app.get('/comments/:id', (req, res) => {
    res.render('pages/show', {
        title: 'Show Comment',
        data: data,
        page: 'show'
    });
});

//route to comments page
app.get('/comments/:id/edit', (req, res) => {
    res.render('pages/edit', {
        title: 'Edit Comment',
        data: data,
        page: 'edit'
    });
});

//route to comments page
app.get('/comments/:id/delete', (req, res) => {
    res.render('pages/delete', {
        title: 'Delete Comment',
        data: data,
        page: 'delete'
    });
});

//start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

