const fs = require('fs');
const copy = require('../lib/copy');

describe('copy function', () => {
  afterEach(() => {
    fs.unlink('./writing-copy.txt', (err) => {
      if(err) throw err;
      console.log('/writing-copy.txt was deleted'); 
    });
  });

  beforeEach(() => {
    fs.writeFile('writing-copy.txt', 'I am writtennnnn\n', (err) => {
      if(err) throw err;
      console.log('/writing-copy.txt was created'); 
    });
  });

  it('test copied file', done => {
    copy('./writing.txt', './writing-copy.txt', err => {
      expect(err).toBeFalsy();

      fs.readFile('./writing-copy.txt', { encoding: 'utf8' }, (err, data) => {
        expect(err).toBeFalsy();
        expect(data).toEqual('I am writtennnnn\n');
        done();
      });
    });
    done();
  });


});