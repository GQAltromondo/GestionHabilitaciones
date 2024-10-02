sap.ui.define([
	//helpers
	"sap/ui/core/format/NumberFormat",
	"sap/ui/core/format/DateFormat"
], function( NumberFormat, DateFormat) {
	"use strict";

	return {

		formatBaseTCT: function (Base) {
			var Empresa = this.getView().getModel("Habilitacion") ? this.getView().getModel("Habilitacion").getData().Empresa : '';

			if (Empresa === 'TRANSENER') {
				var Bases = sap.ui.getCore().getModel("EstacionTransenerModel") ? sap.ui.getCore().getModel("EstacionTransenerModel").getData().Estaciones :
					'';
			} else { //Sino es TRANSBA
				var Bases = sap.ui.getCore().getModel("EstacionTransbaModel") ? sap.ui.getCore().getModel("EstacionTransbaModel").getData().Estaciones :
					'';
			}
			var aSelectedBase = Bases.filter((item) => {
				return item.Codigo === Base;
			});
			var oSelectedBase = aSelectedBase[0];

			return oSelectedBase.Codigo + " - " + oSelectedBase.Descripcion;
		},
		
		encode_B64: function(file) {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			return reader.result;
		},

		getType: function(obj) {
			return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
		},

		findObjectInArray: function(arrayOfObjects, property, key) {
			var results = arrayOfObjects.filter(function(object) {
				return object[property] === key;
			});
			return results[0] || null;
		},

		findInArray: function(arrayOfObjects, property, key) {
			var results = arrayOfObjects.filter(function(object) {
				return object[property] === key;
			});
			return results || null;
		},
        formatJsonDate: function(date) {
            if (date) {     
                var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
                return newDate;
            }
        },
        
        formatImage: function(dataImg){
			let newSignature = "-";
			if(dataImg != undefined && dataImg.length > 22){
			let oSignature = dataImg.substr("data:image/gif;base64,".length);
				newSignature = "data:image/png;base64," + oSignature;
			}
			
			return newSignature;
		},
		
		formateDate: function(date){
			if(date){
				let dateFormat = DateFormat.getDateInstance({pattern: "dd/MM/yyyy"});

				return dateFormat.format(date);
			}else {
				return "-";
			}
		},
		
		xmlToJson: function(xml) {

			// Create the return object
			var obj = {};
			if (xml.nodeType === 1) { // element
				// do attributes
				if (xml.attributes.length > 0) {
					obj["@attributes"] = {};
					for (var j = 0; j < xml.attributes.length; j++) {
						var attribute = xml.attributes.item(j);
						obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
					}
				}
			} else if (xml.nodeType === 3) { // text
				obj = xml.nodeValue;
			}

			// do children
			if (xml.hasChildNodes()) {
				for (var i = 0; i < xml.childNodes.length; i++) {
					var item = xml.childNodes.item(i);
					var nodeName = item.nodeName;
					if (typeof(obj[nodeName]) === "undefined") {
						obj[nodeName] = this.xmlToJson(item);
					} else {
						if (typeof(obj[nodeName].push) === "undefined") {
							var old = obj[nodeName];
							obj[nodeName] = [];
							obj[nodeName].push(old);
						}
						obj[nodeName].push(this.xmlToJson(item));
					}
				}
			}
			return obj;
		},

		removeResults: function(oObject) {
			oObject = (oObject.results) ? oObject.results : (oObject.result) ? oObject.result : oObject;
			delete oObject.__metadata;
			for (var property in oObject) {
				var type = this.getType(oObject[property]);
				if (type === "object") {
					oObject[property] = this.removeResults(oObject[property]);
				}
				if (type === "number") {
					(new RegExp("TIENE.*").test(property)) ? oObject[property] = !!+oObject[property]: undefined;
				}
			}
			return oObject;
		}

	};
});