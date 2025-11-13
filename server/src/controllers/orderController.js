const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { customerName, phone, address, items, total } = req.body;

    if (!customerName || !phone || !address || !items?.length || total == null) {
      return res.status(400).json({ message: 'Missing required order fields.' });
    }

    const order = await Order.create(req.body);

    res.status(201).json({
      message: 'Order placed successfully! We will reach out with delivery details.',
      data: order,
    });
  } catch (error) {
    console.error('createOrder error:', error);
    res.status(500).json({ message: 'Failed to place order.' });
  }
};

