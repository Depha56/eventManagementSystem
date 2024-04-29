const User = require('../models/user.model.js');

exports.createUser = async (req, res) => {
 try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
 } catch (error) {
    res.status(400).send(error);
 }
};

exports.loginUser = async (req, res) => {
 try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid credentials' });
    }
    // Generate and send token here
    res.send({ message: 'Logged in successfully' });
 } catch (error) {
    res.status(500).send(error);
 }
};

exports.getUserDetails = async (req, res) => {
 try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
 } catch (error) {
    res.status(500).send(error);
 }
};
