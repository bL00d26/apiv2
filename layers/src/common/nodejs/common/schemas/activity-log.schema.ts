import { mongoose } from '../plugins';

const options: mongoose.SchemaOptions = {
  _id: false,
  timestamps: { createdAt: true, updatedAt: false },
};

const PayloadSchema = new mongoose.Schema(
  {
    request: Object,
    response: Object,
    note: String,
  },
  { _id: false, timestamps: false },
);

const ActivityLogSchema = new mongoose.Schema(
  {
    event: { type: String, required: true },
    payload: PayloadSchema,
    createdAt: { type: Date },
    origin: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
  },
  options,
);

export { ActivityLogSchema };
