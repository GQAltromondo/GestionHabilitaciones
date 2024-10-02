sap.ui.jsview("transener.GestionHabilitaciones.view.App", {
	
	createContent: function () {

	    this.setDisplayBlock(true);

	    var app = new sap.m.App({
	        id: this.createId("app"),
	        pages: [
	            sap.ui.jsview(this.createId("Main"), "transener.GestionHabilitaciones.view.Main")
	        ]
	    });
	    return app;
	}
});