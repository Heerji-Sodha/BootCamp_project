import mongoose from 'mongoose';

const uri: string = 'mongodb+srv://newtodolist:newtodolist@cluster0-zfjth.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri)
export default mongoose