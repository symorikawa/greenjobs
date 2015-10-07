/* globals greenjobs, listIndustries */

describe("List Industries", function() {
  var testdata = greenjobs.slice(0,10);
  var noIndustry = [{name: "a"}];
  var emptyIndustry = [{Industry: ""}];


  it("should return a list of strings when given valid data", function() {

    expect(listIndustries(testdata)).toEqual([ "Construction", "Agriculture, Forestry, Fishing and Hunting " ]);

  });

  it("should throw an exception if missing industry field", function() {

    expect(function() {
      listIndustries(noIndustry);
    }).toThrowError("No industry field");
  });

  it("should throw an exception if industry field is empty", function() {

    expect(function() {
      listIndustries(emptyIndustry);
    }).toThrowError("Empty industry field");
  });
});
