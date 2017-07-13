if (Meteor.isServer) {
  XmlRoutes.add('GET', 'do-parse', function (req, res) {
    XmlRoutes.sendResult(res, {data: true}, "xmlkey");
  });
} else {
  describe('XML Routes - test if parse is working', () => {
    it('should return xml', (done) => {
      HTTP.get('/do-parse', (function (err, res) {
        console.log(res);
        chai.assert.equal(err, null);
        chai.assert.equal(res.content.startsWith("<"), true);
        done();
      }));
    });
  });
}