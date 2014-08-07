sap.ui.controller("espm-ui-reviews-web.test-tab-3", {
	createReview : function() {
		var oCommentField = sap.ui.getCore().byId("test-tab-3-comment-field-id");

		var oCustomerReview = {};

		// user defined comment
		oCustomerReview.Comment = oCommentField.getValue();

		// all other values are pre-defined
		oCustomerReview.FirstName = "First name";
		oCustomerReview.LastName = "Last name";
		oCustomerReview.Rating = "3";
		oCustomerReview.CreationDate = new Date().toISOString().replace("Z", "0000");
		oCustomerReview.ProductId = "HT-2000";

		// create customer review
		var fnSuccess = $.proxy(this.showSuccessMsg, this);
		var fnError = $.proxy(this.showReadError, this);
		sap.ui.getCore().getModel("extensionodatamodel").create("/CustomerReviews", oCustomerReview, null, fnSuccess,
				fnError);

	},

	showSuccessMsg : function() {
		sap.ui.commons.MessageBox.alert(sap.app.i18n.getProperty("TEST_TAB_WRITE_COMMENT_SUCCESS_MSG"));
	},

	showReadError : function(oError) {
		sap.app.utility.showErrorMessage(sap.app.i18n.getProperty("TEST_TAB_WRITE_COMMENT_ERROR_MSG") + ": "
				+ oError.message);
	},

});