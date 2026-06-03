sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
], function (Controller, JSONModel, Filter, FilterOperator, MessageToast) {
    "use strict";
    return Controller.extend("com.example.will.controller.App", {
        onInit: function () {
            // Load initial data
            var oData = { Employees: [] };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue") || "";
            var aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("name", FilterOperator.Contains, sQuery));
            }
            var oTable = this.byId("mainTable");
            if (oTable) {
                oTable.getBinding("items").filter(aFilters);
            }
        },

        onAdd: function () {
            // Open add dialog or show form
            MessageToast.show("Add new item");
        },

        onSave: function () {
            var oModel = this.getView().getModel();
            var aItems = oModel.getProperty("/Employees") || [];
            var oNewItem = { id: Date.now() };
            oNewItem.name = this.byId("inputName").getValue();
            oNewItem.department = this.byId("inputDepartment").getValue();
            oNewItem.email = this.byId("inputEmail").getValue();
            oNewItem.joiningDate = this.byId("inputJoiningDate").getValue();
            oNewItem.status = this.byId("inputStatus").getValue();
            aItems.push(oNewItem);
            oModel.setProperty("/Employees", aItems);
            MessageToast.show("Item saved successfully");
        },

        onItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oBindingContext = oItem.getBindingContext();
            sap.m.MessageToast.show("Selected: " + oBindingContext.getProperty("name"));
        }
    });
});
