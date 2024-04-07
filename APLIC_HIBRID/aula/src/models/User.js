const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    /* aqui você passa a configuração do seu esquema.*/
})

module.exports = mongoose.model('User', userSchema);