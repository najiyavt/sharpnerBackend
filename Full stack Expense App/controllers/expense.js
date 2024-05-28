const Expense = require('../models/expense');

exports.postExpense = async (req,res,next) => {

    const { amount, description, category } = req.body;
    try{
        const expenses = await Expense.create({
           amount:amount,
           description:description,
           category:category
        })
        res.status(201).json(expenses)
    }catch(err) {
        console.log("ERROR:(",err);
        res.status(500).json({ error: 'Failed to create expense' })
    };
}

exports.getExpense = async (req,res,next) => {
    try{
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    }catch(err) {
        console.log("ERROR:(",err);
        res.status(500).json({ error: 'Failed to retrieve expenses' });
    };
}

exports.deleteExpense = async(req,res,next) => {

    console.log(req.params);
    Expense.findByPk(req.params.id)
    .then(result => {
        result.destroy()
        res.send(result);
    }).catch(err => console.log(err));
}

exports.getEditExpense = async (req,res,next) => {
    try{
        const editMode = req.query.edit;
        if(!editMode){
            return res.redirect('/')
        }
        const id= req.params.id;
        await Expense.findByPk(id)
        res.send('Edit mode enabled');
    }catch(err) {
        console.log("ERROR:(",err)
        res.status(500).json({ error: 'Failed to enable edit mode' });
    }
}

exports.postEditExpense = async (req,res,next) => {
    try{
        const id = req.body.id;
        const { amount, description, category } = req.body;

        const expenses = await Expense.findByPk(id);
        if (!expenses) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        product.amount=amount;
        product.description=description;
        product.category=category;
        await product.save();
   
        console.log("Expense updated:", id);
        res.sendStatus(200);
    }catch(err ) {
        console.log("ERROR:(",err);
        res.status(500).json({ error: 'Failed to update expense' });
    };
}