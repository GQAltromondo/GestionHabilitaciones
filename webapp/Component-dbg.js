sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"transener/GestionHabilitaciones/model/models",
		"transener/GestionHabilitaciones/utils/FioriHelper",
	"transener/GestionHabilitaciones/utils/FioriComponentHelper",
], function (UIComponent, Device, models,FioriHelper, FioriComponentHelper) {
	"use strict";

	return UIComponent.extend("transener.GestionHabilitaciones.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
			createContent: function() {
			//sets component
			FioriComponentHelper.setComponent(this);
			// create root view
			var view = sap.ui.view({
				id: this.createId("App"),
				viewName: "transener.GestionHabilitaciones.view.App",
				type: "JS",
				viewData: {
					component: this
				}
			});
			FioriHelper.loadCorporateStyling();
			return view;
		}
	});
});