sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("com.example.will.Component", {
        metadata: { manifest: "json" },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            // Initialize app data model
            var oModel = new JSONModel({
                Employees: []
            });
            this.setModel(oModel);
        }
    });
});
