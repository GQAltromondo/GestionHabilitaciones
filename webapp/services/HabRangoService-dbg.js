sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function(oDataService) {
	"use strict";

	return {

		create: function(habRango, createODataOnSuccess, createODataOnError) {
			var odataModel = oDataService.getModel();
			var oData = {
				"NroLote": "9999999999",
				"HabRangosSet": habRango
			};
			odataModel.create("/LotesSet", oData, {
				success: createODataOnSuccess,
				error: createODataOnError 
			});
		},
		

	};
});