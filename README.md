```javascript
onExcelDownload: function() {
    var oTable = this.byId("myTable");
    var aColumns = oTable.getColumns().map(function(oColumn) {
        return {
            label: oColumn.getLabel().getText(),
            property: oColumn.getCustomData()[0].getValue()
        };
    });

    var aItems = oTable.getItems();
    var aData = aItems.map(function(oItem) {
        var oContext = oItem.getBindingContext();
        return aColumns.map(function(oColumn) {
            return oContext.getProperty(oColumn.property);
        });
    });

    var oSheet = new sap.ui.export.Spreadsheet({
        dataSource: aData,
        columns: aColumns
    });

    oSheet.build().finally(function() {
        oSheet.destroy();
    });
}
```