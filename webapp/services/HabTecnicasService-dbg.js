sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function(oDataServices) {
	"use strict";

	return {

		LoadHabilitaciones: function(onSuccessCallback, onErrorCallback, filters) {			
			var odataModel = oDataServices.getModel();
			odataModel.read("/HabTecnicasSet", {
				filters: filters,
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}
	};
});