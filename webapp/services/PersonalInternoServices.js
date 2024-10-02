sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function(oDataServices) {
	"use strict";

	return {

		LoadSearch: function(filter, onSuccessCallback, onErrorCallback) {
			var filters = [];
			filters.push(new sap.ui.model.Filter("Nombre", sap.ui.model.FilterOperator.EQ, filter));
			filters.push(new sap.ui.model.Filter("Apellido", sap.ui.model.FilterOperator.EQ, filter));
			filters.push(new sap.ui.model.Filter("Legajo", sap.ui.model.FilterOperator.EQ, filter));
			
			var odataModel = oDataServices.getModel();
			odataModel.read("/PersonalInternoSet", {
				filters: filters,
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}
	};
});