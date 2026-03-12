sap.ui.jsview("transener.GestionHabilitaciones.view.App", {

    createContent: function () {

        this.setDisplayBlock(true);

        var app = new sap.m.App({
            id: this.createId("app"),
            pages: [
                sap.ui.view({id: this.createId("Main"), viewName: "transener.GestionHabilitaciones.view.Main", type: "XML"})
            ]
        });
        return app;
    }
});