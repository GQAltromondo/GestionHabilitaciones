sap.ui.define([
	"transener/GestionHabilitaciones/services/oDataServices"
], function(oDataServices) {
	"use strict";

	return {
        
		loadSignature : function(onSuccessCallback, onErrorCallback) {			
			var odataModel = oDataServices.getModel();
			odataModel.read("/FirmasUsuariosSet('')",{		
				success: onSuccessCallback,
				error: onErrorCallback
			});
		}
	};
});