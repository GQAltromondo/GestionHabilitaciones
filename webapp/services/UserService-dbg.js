// DESARROLLADO POR ING CAMPAGNA MATIAS
sap.ui.define([
	"transener/GestionHabilitaciones/utils/AppManagementHelper",
	"transener/GestionHabilitaciones/utils/FioriHelper"
], function (AppManagementHelper, FioriHelper) {
	"use strict";
	return {
		_servicePathPrefix: "/services/userapi",
		_servicePath: "/attributes",

		armarDatos: function (datos) {

			debugger;

			var aGroupsTemporal = datos[0].groups;

			var aGroups = aGroupsTemporal.map(function (fila) {
				return fila.display;
			});

			var aUserData = {
				firstname: datos[0].displayName,
				lastname: datos[0].displayName,
				email: datos[0].emails[0].value,
				name: datos[0].emails[0].value,
				displayName: datos[0].displayName,
				groups: aGroups


			};
			return aUserData;
		},

		getUser: function (successCallback, errorCallback) {


			/*	
			var path = this._servicePathPrefix + this._servicePath + "?multiValuesAsArrays=true";
			jQuery.ajax(path, {
				method: "GET",
				success: successCallback,
				error: errorCallback
			});
			*/

			const url = sap.ui.getCore().getModel("appCurrentInfo").appUrl + "/user-api/currentUser";

			var oModel = new sap.ui.model.json.JSONModel();
			var mock = {
				firstname: "Dummy",
				lastname: "User",
				email: "dummy.user@com",
				name: "dummy.user@com",
				displayName: "Dummy User (dummy.user@com)",
				groups: ["Mantenimiento_GerRegional",
					"Examinadores_PT15",
					"Selector_evaluadores_PT15",
					"seguridadH_PT15",
					"Rep_Direccion_PT15",
					"MedicinaLaboral_PT15",
					"Gestion_Calidad_PT152",
					"Direccion_TecnicaPT15",
					"Auditor_Externo",
					"Gestion_habilitaciones",
					"Solicitante_PT15",
					"Mantenimiento_Secretaria",
					"Director_Tecnico",
					"Ger_Operaciones",
					"Aprobacion_Habilitaciones"
				]
			};

			oModel.loadData(url);
			var that = this;
			oModel.dataLoaded()
				.then(() => {
					//check if data has been loaded
					//for local testing, set mock data
					if (oModel.getData().email) {

						var cUrl = sap.ui.getCore().getModel("appCurrentInfo").appUrl + '/IAS/scim/Users?filter=emails.value eq "' + oModel.getData().email + '"'

						//Llamar a API del IAS
						$.ajax({

							type: "GET",
							contentType: "application/scim+json",
							url: cUrl,
							xhrFields: { withCredentials: false },
							dataType: "json",
							async: false,

							success: function (data, textStatus, jqXHR) {

								//window.alert("success");
								console.log("It works");
								var oModelUser = new sap.ui.model.json.JSONModel();
								oModelUser.setData(data.Resources);

								debugger;
								var aDatosUsuario = that.armarDatos(data.Resources);

								oModel.setData(aDatosUsuario);
								//oView.getView().setModel(oModel, "users");
								sap.ui.getCore().setModel(oModel, "UserJsonModel");
							},
							error: function (data, xhr, textStatus) {
								console.log(data);
								console.log(xhr);
								console.log(textStatus);
								debugger;
								window.alert("error");
							}
						});
						// Fin llamar a API del IAS
					}
					else {
						oModel.setData(mock);
					}
					// this.setModel(oModel, "userInfo");  
				})
				.catch(() => {
					oModel.setData(mock);
				});
		}
	};
});