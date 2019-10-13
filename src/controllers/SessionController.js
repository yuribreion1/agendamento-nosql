// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async init(req, res) {
        res.clearCookie('username');
        return res.render('login/login');
    },

    async menu(req, res) {
        return res.render('menu/menu');
    },

    async login(req, res) {
        const { username, password } = req.body;
        let user = await User.findOne({ username, password });
        if (user) {
            res.cookie('username', username, { maxAge: 500000 });
            res.render('menu/menu');
        } else {
            res.render('login/nonauthorized')
        }
    },

    async registration(req, res) {
        return res.render('login/registration');
    },

    async store(req, res) {
        const { username, password } = req.body;
        let user = await User.findOne({ username });
        if (!user) {
            active = true;
            user = await User.create({ username, password, active })   
        }
        return res.format({
            html: () => {
                res.render('login/login')
            },
            json: () => {
                res.json(user);
            }
        })
    },

    async show(req, res) {
        const users = await User.findById(req.params.id);
        return res.json(users);
    },

    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    }, 

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },

    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    }
}