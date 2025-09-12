import mongoose from 'mongoose';

// Helper function to normalize the option
function normalizeOption(option: string) {
  if (!option) {
    return '';
  }
  return option
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/\//g, '-')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/,/g, '');
}

const optionSchema = new mongoose.Schema({
  option: String,
  option_slug: { type: String, trim: true }
});

// Middleware to set the option_slug before saving
optionSchema.pre('save', function (next) {
  if (this.option) {
    this.option_slug = normalizeOption(this.option);
  } else {
    this.option_slug = ''; // Or handle as appropriate for your use case
  }
  next();
});

const yearSchema = new mongoose.Schema({
  year: Number,
  Options: [optionSchema],
});

const modelSchema = new mongoose.Schema({
  model: { type: String, trim: true },
  years: [yearSchema],
});

const makeSchema = new mongoose.Schema({
  make: { type: String, trim: true },
  models: [modelSchema],
});

const SideBarFormAPIs = mongoose.models.sidebar_form_apis || mongoose.model('sidebar_form_apis', makeSchema);

export default SideBarFormAPIs;
