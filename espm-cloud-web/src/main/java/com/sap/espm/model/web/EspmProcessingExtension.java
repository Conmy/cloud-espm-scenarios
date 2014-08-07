package com.sap.espm.model.web;

import org.apache.olingo.odata2.jpa.processor.api.model.JPAEdmExtension;
import org.apache.olingo.odata2.jpa.processor.api.model.JPAEdmSchemaView;

import com.sap.espm.model.function.impl.CustomerProcessor;
import com.sap.espm.model.function.impl.SalesOrderProcessor;

/**
 * 
 * Class for registering function imports.
 * 
 */
public class EspmProcessingExtension implements JPAEdmExtension {

	/**
	 * Register function imports.
	 */

	@Override
	public void extendWithOperation(JPAEdmSchemaView view) {
		view.registerOperations(CustomerProcessor.class, null);
		view.registerOperations(SalesOrderProcessor.class, null);

	}

	@Override
	public void extendJPAEdmSchema(JPAEdmSchemaView arg0) {
		// TODO Auto-generated method stub

	}

}
