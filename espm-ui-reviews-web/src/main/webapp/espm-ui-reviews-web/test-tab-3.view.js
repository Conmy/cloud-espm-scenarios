sap.ui.jsview("espm-ui-reviews-web.test-tab-3", {

	getControllerName : function() {
		return "espm-ui-reviews-web.test-tab-3";
	},

	createContent : function(oController) {

		// table
		var oTable = new sap.ui.table.Table({
			columns : [ {
				label : "{i18n>TEST_TAB_PRODUCT_ID}",
				template : "ProductId",
				sortProperty : "ProductId"
			}, {
				label : "{i18n>TEST_TAB_COMMENT}",
				template : "Comment",
				sortProperty : "Comment"
			} ]
		});
		oTable.setModel(sap.ui.getCore().getModel("extensionodatamodel"));
		oTable.bindRows("/CustomerReviews");

		// comment
		var oCommentLayout = new sap.ui.commons.layout.HorizontalLayout({
			content : [ new sap.ui.commons.Label({
				text : "{i18n>TEST_TAB_COMMENT}"
			}), new sap.ui.commons.TextField({
				id : "test-tab-3-comment-field-id",
				value : "",
			}), new sap.ui.commons.Button({
				text : "{i18n>TEST_TAB_CREATE_COMMENT_BUTTON}",
				press : $.proxy(oController.createReview, oController)
			}) ]
		});

		var oLayout = null;
		// display data source info
		if (sap.app.localStorage.getPreference(sap.app.localStorage.PREF_DISPLAY_DATA_SOURCE_INFO)) {
			oLayout = new sap.ui.commons.layout.VerticalLayout({
				content : [ this.getDataSourceInfoLayout(), oTable, oCommentLayout ]
			});
		} else {
			oLayout = new sap.ui.commons.layout.VerticalLayout({
				content : [ oTable, oCommentLayout ]
			});
		}

		return oLayout;
	},

	getDataSourceInfoLayout : function() {
		var oDataSourceInfoLayout = new sap.ui.commons.layout.MatrixLayout({
			width : "100%",
		});

		oDataSourceInfoLayout.createRow(new sap.ui.commons.layout.MatrixLayoutCell({
			content : [ new sap.ui.commons.TextView({
				text : sap.app.i18n.getProperty("DATA_SOURCE_INFO") + ":",
				wrapping : false,
				design : sap.ui.commons.TextViewDesign.Bold
			}), new sap.ui.commons.TextView({
				text : sap.app.i18n.getProperty("DATA_SOURCE_INFO_EXT_DATA_RETRIEVED_FROM"),
				wrapping : false,
			}).addStyleClass("textViewMarginsLeftRight"), new sap.ui.commons.TextView({
				text : '(',
				wrapping : false,
			}), new sap.ui.commons.Link({
				text : "{i18n>DATA_SOURCE_INFO_EXT_LINK_TEXT}",
				href : sap.app.config.cloudExtensionOdataServiceUrl,
				target : "_blank"
			}), new sap.ui.commons.TextView({
				text : ')',
			}) ]
		}));

		return oDataSourceInfoLayout;
	},

});
