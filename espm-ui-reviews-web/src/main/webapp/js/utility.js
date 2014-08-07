jQuery.sap.declare("sap.app.utility");

sap.app.utility = {
	getBackendDestination : function() {
		var prefBackendType = sap.app.localStorage.getPreference(sap.app.localStorage.PREF_USED_BACKEND_TYPE);
		if (prefBackendType === sap.app.localStorage.PREF_USED_BACKEND_TYPE_ABAP) {
			return ("proxy/abapbackend");
		} else {
			return ("proxy/cloudbackend");
		}
	},

	getBackendImagesDestination : function() {
		var prefBackendType = sap.app.localStorage.getPreference(sap.app.localStorage.PREF_USED_BACKEND_TYPE);
		if (prefBackendType === sap.app.localStorage.PREF_USED_BACKEND_TYPE_ABAP) {
			return ("proxy/abapbackendimages");
		} else {
			return ("proxy/cloudbackendimages");
		}
	},

	getImagesBaseUrl : function() {
		var prefBackendType = sap.app.localStorage.getPreference(sap.app.localStorage.PREF_USED_BACKEND_TYPE);
		if (prefBackendType === sap.app.localStorage.PREF_USED_BACKEND_TYPE_ABAP) {
			return (sap.app.config.abapImagesBaseUrl);
		} else {
			return (sap.app.config.cloudImagesBaseUrl);
		}
	},

	getBackendTypeText : function() {
		var prefBackendType = sap.app.localStorage.getPreference(sap.app.localStorage.PREF_USED_BACKEND_TYPE);
		if (prefBackendType === sap.app.localStorage.PREF_USED_BACKEND_TYPE_ABAP) {
			return (sap.app.i18n.getProperty("DATA_SOURCE_INFO_ABAP_BACKEND"));
		} else {
			return (sap.app.i18n.getProperty("DATA_SOURCE_INFO_HANA_CLOUD"));
		}
	},

	getDataSourceInfoOdataServiceUrl : function() {
		var prefBackendType = sap.app.localStorage.getPreference(sap.app.localStorage.PREF_USED_BACKEND_TYPE);
		if (prefBackendType === sap.app.localStorage.PREF_USED_BACKEND_TYPE_ABAP) {
			return (sap.app.config.abapOdataServiceUrlWithLogin);
		} else {
			return (sap.app.config.cloudOdataServiceUrl);
		}
	},

	showErrorMessage : function(sErrorMessage) {
		var doShow = function() {
			sap.ui.commons.MessageBox.alert(sErrorMessage);
		};

		if (sap.ui.getCore().isInitialized()) {
			doShow();
		} else {
			sap.ui.getCore().attachInitEvent(doShow);
		}
	}

};
