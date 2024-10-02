sap.ui.define([
	"transener/GestionHabilitaciones/utils/FormatHelper",
	"transener/GestionHabilitaciones/utils/PrintTcT",
	"transener/GestionHabilitaciones/utils/PrintPT15",
	"transener/GestionHabilitaciones/utils/PrintMto"], 
	function (FormatHelper, PrintTcT, PrintPT15, PrintMto) {
	"use strict";

	return {

		handlePrintAndDownload: function (classHab, oModel, oTipoHabilitacion, oModelHabilitacion, customData, SendCommentModel)  {
			switch (classHab) {
			case "H0001":
				PrintMto.handlePrintAndDownload(oModel, oTipoHabilitacion, oModelHabilitacion, customData, SendCommentModel);
				break;
			case "H0002":
				PrintTcT.handlePrintAndDownload(oModel, oTipoHabilitacion, oModelHabilitacion, customData);
				break;
			case "H0003":
				PrintPT15.handlePrintAndDownload(oModel, oTipoHabilitacion, oModelHabilitacion, customData, SendCommentModel);
				break;
			}
		}
	};
});