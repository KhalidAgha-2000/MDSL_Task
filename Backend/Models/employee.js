const { model, Schema } = require('mongoose')

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    }
},
    {
        collection: 'employees',
        timestamps: true,

    }
);

const Model = model('Employee', employeeSchema);
module.exports = Model;