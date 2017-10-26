
global.icity = require('../')
      

describe("src/icity.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("parse():base 13810570000 13820570000", function () {
    examplejs_printLines = [];
  examplejs_print(JSON.stringify(icity.parse('13810570000')))
  assert.equal(examplejs_printLines.join("\n"), "{\"province\":\"北京\",\"city\":\"北京\",\"areaCode\":\"010\",\"provider\":\"中国移动\"}"); examplejs_printLines = [];

  examplejs_print(JSON.stringify(icity.parse('13820570000')))
  assert.equal(examplejs_printLines.join("\n"), "{\"province\":\"天津\",\"city\":\"天津\",\"areaCode\":\"022\",\"provider\":\"中国移动\"}"); examplejs_printLines = [];
  });
          
  it("parse():base 15900940000", function () {
    examplejs_printLines = [];
  examplejs_print(JSON.stringify(icity.parse('15900940000')))
  assert.equal(examplejs_printLines.join("\n"), "{\"province\":\"上海\",\"city\":\"上海\",\"areaCode\":\"021\",\"provider\":\"中国移动\"}"); examplejs_printLines = [];
  });
          
  it("parse():virtual providers", function () {
    examplejs_printLines = [];
  examplejs_print(JSON.stringify(icity.parse('17069990000')))
  assert.equal(examplejs_printLines.join("\n"), "{\"province\":\"辽宁\",\"city\":\"沈阳\",\"areaCode\":\"024\",\"provider\":\"中国移动\"}"); examplejs_printLines = [];

  examplejs_print(JSON.stringify(icity.parse('17070000000')))
  assert.equal(examplejs_printLines.join("\n"), "{\"province\":\"北京\",\"city\":\"北京\",\"areaCode\":\"010\",\"provider\":\"中国联通\"}"); examplejs_printLines = [];
  });
          
  it("parse():coverage", function () {
    examplejs_printLines = [];
  examplejs_print(JSON.stringify(icity.parse()))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];

  examplejs_print(JSON.stringify(icity.parse(123)))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];

  examplejs_print(JSON.stringify(icity.parse('19900940000')))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
});
         