sap.ui.jsview("espm-ui-reviews-web.main", {

	getControllerName : function() {
		return "espm-ui-reviews-web.main";
	},

	createContent : function(oController) {

		var oShell = new sap.ui.ux3.Shell({
			id : oController.createId("shell-id"),
			appTitle : "{i18n>SHELL_HEADER_TITLE}",
			showLogoutButton : true,
			showSearchTool : false,
			showFeederTool : false,
			showTools : true,
			showPane : true,
			paneWidth : 500,
			worksetItems : [ new sap.ui.ux3.NavigationItem({
				id : "nav-test-tab-1",
				text : "{i18n>TEST_TAB_1_SHELL_WORKSET_ITEM}"
			}), new sap.ui.ux3.NavigationItem({
				id : "nav-test-tab-2",
				text : "{i18n>TEST_TAB_2_SHELL_WORKSET_ITEM}",
			}), new sap.ui.ux3.NavigationItem({
				id : "nav-test-tab-3",
				text : "{i18n>TEST_TAB_3_SHELL_WORKSET_ITEM}",
			}) ]
		});

		var oSettingsButton = new sap.ui.commons.Button({
			id : oController.createId("settings-button-id"),
			text : "{i18n>SHELL_HEADER_ITEM_SETTINGS_TEXT}",
			tooltip : "{i18n>SHELL_HEADER_ITEM_SETTINGS_TOOLTIP}",
			press : function(oEvent) {
				oController.openSettingsDialog();
			}
		});
		oShell.addHeaderItem(oSettingsButton);

		// action when shell workset item is clicked
		oShell.attachWorksetItemSelected(function(oEvent) {
			var sViewName = oEvent.getParameter("id").replace("nav-", "");
			oShell.setContent(sap.app.viewCache.get(sViewName));
		});

		// initial shell content
		oShell.addContent(sap.app.viewCache.get("test-tab-1"));

		return oShell;
	},
});
