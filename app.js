const express = require('express');
const app = express();
var log4js = require('log4js');
const port = 8085;
log4js.configure(
  {
    appenders: {
      file: {
        type: 'file',
        filename: 'sample.log',
        maxLogSize: 10 * 1024 * 1024, 
        backups: 5, 
        compress: true, 
        encoding: 'utf-8',
        mode: 0o0640,
        flags: 'w+'
      },
      dateFile: {
        type: 'dateFile',
        filename: 'euvaiToken.log',
        pattern: 'yyyy-MM-dd-hh',
        compress: true
      },
      out: {
        type: 'stdout'
      }
    },
    categories: {
      default: { appenders: ['file', 'dateFile', 'out'], level: 'trace' }
    }
  }
);

const logger = log4js.getLogger('APP');
logger.level =  'trace';

app.get('/', (req,res)=>{
res.redirect('/index.html');
}
);

app.listen(port,()=>{
console.log('started 8085');
});
