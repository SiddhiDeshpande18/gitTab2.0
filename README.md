```javascript
onExcelDownload: function() {
    var oTable = this.byId("yourTableId");
    var aCols = oTable.getColumns().map(function(oColumn) {
        return {
            label: oColumn.getHeader().getText(),
            property: oColumn.getSortProperty() || oColumn.getFilterProperty()
        };
    });
    var aData = oTable.getBinding("items").getContexts().map(function(oContext) {
        return oContext.getObject();
    });
    var oSettings = {
        workbook: {
            columns: aCols
        },
        dataSource: aData
    };
    var oSheet = new sap.ui.export.Spreadsheet(oSettings);
    oSheet.build().then(function() {
        oSheet.destroy();
    });
}
```