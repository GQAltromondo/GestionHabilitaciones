sap.ui.define([
    "transener/GestionHabilitaciones/services/oDataServices"
], function (oDataServices) {
    "use strict";

    return {

        LoadRegiones: function (Empresa, onSuccessCallback, onErrorCallback) {
            var odataModel = oDataServices.getModel();
            debugger;
            odataModel.read("/RegionesSet", {
                filters: [
                    new sap.ui.model.Filter("Empresa", sap.ui.model.FilterOperator.EQ, Empresa)
                ],
                success: onSuccessCallback,
                error: onErrorCallback
            });
        },

        loadAllRegiones: function (success, error) {
            var promises = [];
            var model = oDataServices.getModel();
            var entitySet = "/RegionesSet";
            promises.push(new Promise(function (resolve, reject) {
                model.read(entitySet, {
                    filters: [
                        new sap.ui.model.Filter("Empresa", sap.ui.model.FilterOperator.EQ, "100")
                    ],
                    success: resolve,
                    error: reject
                });
            }));
            promises.push(new Promise(function (resolve, reject) {
                model.read(entitySet, {
                    filters: [
                        new sap.ui.model.Filter("Empresa", sap.ui.model.FilterOperator.EQ, "300")
                    ],
                    success: resolve,
                    error: reject
                });
            }));
            Promise.all(promises).then(success).catch(error);
        }
    };
});