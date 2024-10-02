sap.ui.define([
    "transener/GestionHabilitaciones/services/oDataServices"
], function (oDataServices) {
    "use strict";

    return {

        SaveAdjunto: function (data, onSuccessCallback, onErrorCallback) {
            var odataModel = oDataServices.getModel();
            odataModel.create("/AdjuntosSet", data, {
                success: onSuccessCallback,
                error: onErrorCallback
            });
        }
    };
});