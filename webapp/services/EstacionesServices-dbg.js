sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServicesOp"
], function (oDataServices) {
	"use strict";

	return {

		LoadEstaciones: function (Empresa,onSuccessCallback, onErrorCallback) {
			var filters = [];
			filters.push(new sap.ui.model.Filter("Empresa", sap.ui.model.FilterOperator.EQ, Empresa));
			var odataModel = oDataServices.getModel();
			odataModel.read("/EstacionesSet", {
				filters: filters,
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}
	};
});