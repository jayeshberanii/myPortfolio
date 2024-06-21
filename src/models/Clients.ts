// models/Contact.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  createdAt: Date;
}

export const ContactSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, },
  email: { type: String, required: true },
  description: { type: String ,required: true},
  createdAt: { type: Date, default: Date.now },
});

const ClientsDetails = mongoose.models.clients || mongoose.model<IContact>('clients', ContactSchema);

export default ClientsDetails;
