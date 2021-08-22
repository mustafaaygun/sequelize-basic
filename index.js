const DB = require('./db');
const { TBLMUSTERIB2B } = require('./models/TblMusteriB2B');
require('./models/TblBekleyenSiparis');
DB.sync({ force: true }).then(()=>{

    const TblMusteriB2B = TBLMUSTERIB2B.build({LNGMUSTERIKOD:1,TXTPASSWORD:'1234'});
    TblMusteriB2B.save();
});