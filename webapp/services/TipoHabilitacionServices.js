sap.ui.define([
    "transener/GestionHabilitaciones/services/oDataServices"
], function (oDataServices) {
    "use strict";

    return {

        LoadTipoHabilitaciones: function (filters, onSuccessCallback, onErrorCallback) {
            var odataModel = oDataServices.getModel();
            odataModel.read("/TipoHabTctSet", {
                filters: filters,
                success: onSuccessCallback,
                error: onErrorCallback
            });
        },

        loadTipoHab: function (onSuccessCallback, onErrorCallback, filters) {
            if (!filters) filters = [];
            var odataModel = oDataServices.getModel();
            odataModel.read("/TipoHabSet", {
                filters: filters,
                success: onSuccessCallback,
                error: onErrorCallback
            });
        }
    };
});