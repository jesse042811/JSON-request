
function combineSheets() {
  var sApp = SpreadsheetApp.getActiveSpreadsheet();
  var s1= sApp.getSheetByName("sheet 1");
  var s2= sApp.getSheetByName("sheet 2");
  var s3= sApp.getSheetByName("sheet 2");
  //  If the nth sheet doesn't exist you'll need to create it here.
  
  var s1values = s1.getRange(1,1,s1.getLastRow(),11).getValues();
  var s2values = s2.getRange(1,1,s2.getLastRow(),11).getValues();
  var s3values = s3.getRange(1,1,s3.getLastRow(),11).getValues();
  
  //  Now, we can put out all together and stuff it in Sheet4
  var s4values = [];
  s4values =  s1values.concat(s2values,s3values);
  s4.getRange(1,1,s4values.length,11).setValues(s4values);
}
