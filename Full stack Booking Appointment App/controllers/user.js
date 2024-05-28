const User = require('../models/user');

exports.getAddProduct = (req, res, next) => {
    User.findAll()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to retrieve details' });
        });
};

exports.postAddProduct = (req, res, next) => {
    const { name, email, phone } = req.body;
    User.create({
        name: name,
        email: email,
        phone: phone
    })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to create details' });
        });
};

exports.deleteProduct = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: 'Product not found' });
            }
            return result.destroy();
        })
        .then(deletedProduct => {
            res.status(200).json(deletedProduct);
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to Delete details' });
        });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const id = req.params.id;
    User.findByPk(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: 'Expense not found' });
            }
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to enable edit mode' });
        });
};

exports.postEditProduct = (req, res, next) => {
    const id = req.body.id;
    const { name, email, phone } = req.body;

    User.findByPk(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: 'Expense not found' });
            }
            result.name = name;
            result.email = email;
            result.phone = phone;
            return result.save();
        })
        .then(() => {
            console.log("Expense updated:", id);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log("ERROR:(", err);
            res.status(500).json({ error: 'Failed to update details' });
        });
};
