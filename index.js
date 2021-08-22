const DB = require('./db'); 
require('./models/TblMusteriB2B');
require('./models/TblBekleyenSiparis');
DB.sync({force:true});
