import mongoose from 'mongoose';

const bugSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      default: 'Medium',
    },
    description: {
      type: String,
      required: true,
    },
  }, {timestamps: true,});

const Bug = mongoose.model('Bug', bugSchema);

export default Bug; 