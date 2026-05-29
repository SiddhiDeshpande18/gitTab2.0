sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("com.example.NewUI5App.Component", {
        metadata: { manifest: "json" },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            // Initialize app data model
            var oModel = new JSONModel({
                Products: []
            });
            this.setModel(oModel);
        }
    });
});
