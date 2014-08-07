sap.ui.controller("espm-ui-reviews-web.reviews", {

	onInit : function() {
		sap.app.viewCache.get("categories-selection").getController().loadCategories();
	}
});
