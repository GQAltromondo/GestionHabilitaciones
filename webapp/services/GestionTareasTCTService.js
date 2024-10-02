sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function (oDataServices) {
	"use strict";

	return {

		LoadTareasAssing : function (legajo, puesto, TipoHabilitacion, onSuccessCallback, onErrorCallback) {
			var odataModel = oDataServices.getModel();
			odataModel.read("/GestionTareasTCTSet", {
				filters: [
					new sap.ui.model.Filter("TipoHabilitacion", sap.ui.model.FilterOperator.EQ, TipoHabilitacion),
                    new sap.ui.model.Filter("Legajo", sap.ui.model.FilterOperator.EQ, legajo),
                    new sap.ui.model.Filter("Puesto", sap.ui.model.FilterOperator.EQ, puesto)
                ],
				success: onSuccessCallback,
				error: onErrorCallback
			});
		},
		
		SaveAssignTarea : function(data, onSuccessCallback, onErrorCallback){
			var odataModel = oDataServices.getModel();
			odataModel.create("/GestionTareasTCTSet", data,{
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}, 
		removeTarea: function(data, onSuccessCallback, onErrorCallback){
			var oPath = this.getPath(data);
			var oDataModel = oDataServices.getModel();
			oDataModel.remove(oPath, {
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}, 
		getPath : function(data){
			var oPath = "/GestionTareasTCTSet(Legajo='" + data.Legajo +
			"',Tarea='" + data.Tarea +
			"',TipoHabilitacion='" + data.TipoHabilitacion +
			"',Tension='" + data.Tension +
			"',Puesto='" + data.Puesto + "')";
			return oPath;
		}
	};
});