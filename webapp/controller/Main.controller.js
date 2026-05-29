sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.example.NewUI5App.controller.Main", {
        onInit: function () {
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            var sId = oContext.getProperty("id");
            this.getOwnerComponent().getRouter().navTo("detail", { id: sId });
        }
    });
});
