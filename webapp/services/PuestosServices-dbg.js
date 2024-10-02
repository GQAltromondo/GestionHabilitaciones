sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServicesOp"
], function(oDataServices) {
	"use strict";

	return {

		LoadPuestos: function(onSuccessCallback, onErrorCallback) {
			var filters = [];
            
            var dominio = "ZZPUESTO";
			filters.push(new sap.ui.model.Filter("Domname", sap.ui.model.FilterOperator.EQ, dominio));
			
			var odataModel = oDataServices.getModel();
			odataModel.read("/TipoLimitacionSet", {
				filters: filters,
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}
	};
});