sap.ui.controller("espm-ui-reviews-web.reviews", {

	onInit : function() {
		sap.app.viewCache.get("categories-selection").getController().loadCategories();
	},

	openCustomerReviewCreationDialog : function() {
		var oBindingContext = sap.app.viewCache.get("product-selection").getSelectedProductItem().getBindingContext();
		var oCustomerReviewCreationView = sap.app.viewCache.get("customer-review-creation");
		oCustomerReviewCreationView.getController().openDialog(oBindingContext);
	}

});
