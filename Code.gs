function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form_Responses1');
  const lastRow = sheet.getLastRow();
  const urlCol = 4;  // D 欄：PDF 文件網址
  const resultCol = 8; // H 欄：轉換後連結

  const originalUrl = sheet.getRange(lastRow, urlCol).getValue();
  const match = originalUrl.match(/[-\w]{25,}/);
  const fileId = match ? match[0] : null;

  if (fileId) {
    const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    sheet.getRange(lastRow, resultCol).setValue(directUrl);
  } else {
    sheet.getRange(lastRow, resultCol).setValue('❌ 無法解析連結');
  }
}
