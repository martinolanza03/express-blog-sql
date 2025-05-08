const posts = require('../data/posts.js');
const connection = require('../data/db.js');

function index(req, res) {
    const sql = 'SELECT * FROM posts';

    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Errore nel collegamento con il Database' });
        res.json(results);
    });
}

function show(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    if (!resultSearch) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    res.json(resultSearch);
}

function create(req, res) {
    const newId = posts[posts.length - 1].id + 1;

    const newPosts = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPosts);

    res.status(201);
    res.json(newPosts);
}

function update(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    if (!resultSearch) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    resultSearch.title = req.body.title;
    resultSearch.content = req.body.content;
    resultSearch.image = req.body.image;
    resultSearch.tags = req.body.tags;

    console.log(posts);

    res.json(resultSearch);
}

function patch(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    if (!resultSearch) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    if (req.body.title !== undefined) resultSearch.title = req.body.title;
    if (req.body.content !== undefined) resultSearch.content = req.body.content;
    if (req.body.image !== undefined) resultSearch.image = req.body.image;
    if (req.body.tags !== undefined) resultSearch.tags = req.body.tags;

    console.log(posts);

    res.json(resultSearch);
}

function destroy(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    posts.splice(posts.indexOf(resultSearch), 1);

    if (!resultSearch) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    console.log(posts);

    res.status(204);
}


// export all function
module.exports = { index, show, create, update, patch, destroy }