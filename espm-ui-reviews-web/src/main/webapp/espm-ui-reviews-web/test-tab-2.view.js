sap.ui.jsview("espm-ui-reviews-web.test-tab-2", {

	oCategoriesDropdownBox : null,

	getControllerName : function() {
		return "espm-ui-reviews-web.test-tab-2";
	},

	createContent : function(oController) {
		this.oCategoriesDropdownBox = new sap.ui.commons.DropdownBox({
			id : "categories-selection-dropdown-box-id",
			width : "100%",
			enabled : false,
			change : function(oEvent) {
				oController.selectedCategoryChanged(oEvent.oSource.getSelectedKey());
			}
		});

		var oCategoriesLabel = new sap.ui.commons.Label({
			text : "{i18n>TEST_TAB_CATEGORIES_LABEL}"
		});

		return new sap.ui.commons.layout.VerticalLayout({
			content : [ oCategoriesLabel, this.oCategoriesDropdownBox ]
		});
	},

	bindCategoriesInDropDownBox : function() {
		this.oCategoriesDropdownBox.setEnabled(true);
		this.oCategoriesDropdownBox.bindItems("/AvailableCategories", new sap.ui.core.ListItem({
			text : "{}",
			key : "{}"
		}));
	},

	setSelectedCategoryInDropDownBox : function(sKey) {
		this.oCategoriesDropdownBox.setSelectedKey(sKey);
	}

});
