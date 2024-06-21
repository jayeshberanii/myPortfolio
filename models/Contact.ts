// models/Contact.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
