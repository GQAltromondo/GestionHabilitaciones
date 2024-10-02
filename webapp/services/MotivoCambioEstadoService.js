sap.ui.define([
    "transener/GestionHabilitaciones/services/oDataServices"
], function (oDataServices) {
    "use strict";
    return {
        saveMotivo: function (data, onSuccessCallback, onErrorCallback) {
            var odataModel = oDataServices.getModel();
            odataModel.create("/MotivoCambioEstadoSet", data, {
                success: onSuccessCallback,
                error: onErrorCallback
            });
        },

        getMotivo: function (filters, onSuccessGetCallback, onErrorGetCallback) {
            var odataModel = oDataServices.getModel();
            odataModel.read("/MotivoCambioEstadoSet", {
                filters: [
                    new sap.ui.model.Filter("Idhabilitacion", sap.ui.model.FilterOperator.EQ, filters.Id),
                    new sap.ui.model.Filter("Clasehab", sap.ui.model.FilterOperator.EQ, filters.Clasehab),
                    new sap.ui.model.Filter("Empresa", sap.ui.model.FilterOperator.EQ, filters.Empresa),
                    new sap.ui.model.Filter("Rol", sap.ui.model.FilterOperator.EQ, filters.Rol)
                ],
                success: onSuccessGetCallback,
                error: onErrorGetCallback
            });
        }

    };
});