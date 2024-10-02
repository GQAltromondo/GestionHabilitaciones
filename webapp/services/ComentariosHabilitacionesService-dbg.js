sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function(oDataServices) {
	"use strict";
	return {
		
		SaveComments : function(data, onSuccessCallback, onErrorCallback) {			
			var odataModel = oDataServices.getModel();
			odataModel.create("/ComentariosHabilitacionesSet", data,{
				success: onSuccessCallback,
				error: onErrorCallback
			});
		},
		
		getComments: function(filters, onSuccessGetCallback, onErrorGetCallback){ 
			var odataModel = oDataServices.getModel();
			odataModel.read("/ComentariosHabilitacionesSet", {
				filters: [
					new sap.ui.model.Filter("Idhabilitacion", sap.ui.model.FilterOperator.EQ, filters.id),
					new sap.ui.model.Filter("Empresa", sap.ui.model.FilterOperator.EQ, filters.empresa),
					new sap.ui.model.Filter("Clasehab", sap.ui.model.FilterOperator.EQ, filters.Clasehab)
				],
				success: onSuccessGetCallback,
				error: onErrorGetCallback
			});
		}
		
	};
});