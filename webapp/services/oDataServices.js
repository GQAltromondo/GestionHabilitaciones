sap.ui.define([], function () {
    "use strict";
    return {

        getModel: function () {
            if (!this._model) {
                var mBaseUrl = sap.ui.getCore().getModel("appCurrentInfo").appUrl;
                var url = mBaseUrl + "/destinations/SAP_Gateway/sap/opu/odata/sap/Z_SCP_HABILITACIONES_SRV/";
                //var url = "/destinations/SAP_Gateway/sap/opu/odata/sap/Z_SCP_HABILITACIONES_SRV/";
                this._model = new sap.ui.model.odata.v2.ODataModel(url, {
                    useBatch: false
                });
            }
            return this._model;
        }
    };
});