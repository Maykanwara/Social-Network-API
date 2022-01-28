const { Schema, model, SchemaTypes } = require('mongoose')
const Email = require('mongoose-type-email')
const { reactionSchema } = require('./Thought')


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 50,
            trim: true,
        },
        email: {
            type: SchemaTypes.Email,
            required: true,
            max_length: 50,
            trim: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],

        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('user', userSchema)

module.exports = User;

       
    