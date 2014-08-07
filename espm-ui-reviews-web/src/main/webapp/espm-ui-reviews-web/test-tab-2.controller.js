sap.ui.controller("espm-ui-reviews-web.test-tab-2", {

	onInit : function() {
		this.loadCategories();
	},

	loadCategories : function() {
		var fnSuccess = $.proxy(this.createAndBindCategorySelectionModel, this);
		var fnError = $.proxy(this.showReadError, this);
		sap.app.odatamodel.read("/ProductCategories", null, null, true, fnSuccess, fnError);
	},

	createAndBindCategorySelectionModel : function(oData) {
		var aCategories = [];
		if (oData) {
			aCategories = $.map(oData.results, function(val) {
				return val.Category;
			});
			aCategories.sort();
		}

		var allCategoriesEntry = sap.app.i18n.getProperty("ALL_CATEGORIES_LIST_ENTRY");
		aCategories.unshift(allCategoriesEntry);

		var oCategorySelectionModel = new sap.ui.model.json.JSONModel();
		oCategorySelectionModel.setData({
			AvailableCategories : aCategories
		});

		this.getView().setModel(oCategorySelectionModel);
		this.getView().bindCategoriesInDropDownBox();
		this.selectedCategoryChanged(aCategories[0]);
	},

	showReadError : function(oError) {
		this.createAndBindCategorySelectionModel();
		sap.app.utility.showErrorMessage(sap.app.i18n.getProperty("READ_ODATA_ERROR_MSG") + ": " + oError.message);
	},

	selectedCategoryChanged : function(sSelectedCategoryId) {
		this.getView().setSelectedCategoryInDropDownBox(sSelectedCategoryId);
		// sap.ui.commons.MessageBox.alert(sap.app.i18n.getProperty("SELECTED_CATEGORY_CHANGED_MSG"));
	}

});
