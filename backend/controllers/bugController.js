import Bug from '../models/bugModel.js';

export const createBug = async (req, res) => {
  try {
    const { title, priority, description } = req.body;
    
    const bug = await Bug.create({
      title,
      priority,
      description,
      user: req.user._id,
    });
    
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find({}).sort({ createdAt: -1 });
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 