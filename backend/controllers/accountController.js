const Account = require('../models/Account');

exports.createAccount = async (req, res) => {
    try {
        const account = new Account({ userId: req.user.id });
        await account.save();
        res.status(201).json({ message: 'Account created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.depositMoney = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        account.balance += req.body.amount;
        await account.save();
        res.json({ message: 'Deposit successful', balance: account.balance });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.withdrawMoney = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (account.balance < req.body.amount) return res.status(400).json({ error: 'Insufficient balance' });
        account.balance -= req.body.amount;
        await account.save();
        res.json({ message: 'Withdrawal successful', balance: account.balance });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBalance = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        res.json({ balance: account.balance });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};