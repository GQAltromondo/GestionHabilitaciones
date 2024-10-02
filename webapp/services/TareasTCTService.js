sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function (oDataServices) {
	"use strict";

	return {

		LoadTareas: function (onSuccessCallback, onErrorCallback) {
			var odataModel = oDataServices.getModel();
			odataModel.read("/TareasTCTSet", {
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}
	};
});