sap.ui.define([
	
], function () {
	"use strict";
	return {
		// globales 
		_oApp: null,
		isPhone: null,
		setApp: function (oApp) {
			this._oApp = oApp;
		},
		getModel: function (sModelName) {
			var jsonModel = this.getApp().getModel(sModelName);
			if (!jsonModel) {
				jsonModel = new sap.ui.model.json.JSONModel();
				jsonModel.setSizeLimit(9999);
				this.getApp().setModel(jsonModel, sModelName);
			}
			return jsonModel;
		},
		getApp: function () {
			return this._oApp;
		}
		
	};
});