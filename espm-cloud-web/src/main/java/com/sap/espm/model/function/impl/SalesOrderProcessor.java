package com.sap.espm.model.function.impl;

import java.util.List;
import java.util.Locale;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import org.apache.olingo.odata2.api.annotation.edm.EdmFunctionImport;
import org.apache.olingo.odata2.api.annotation.edm.EdmFunctionImport.ReturnType;
import org.apache.olingo.odata2.api.annotation.edm.EdmFunctionImport.ReturnType.Type;
import org.apache.olingo.odata2.api.annotation.edm.EdmFunctionImportParameter;
import org.apache.olingo.odata2.api.commons.HttpStatusCodes;
import org.apache.olingo.odata2.api.exception.ODataApplicationException;
import org.apache.olingo.odata2.api.exception.ODataException;

import com.sap.espm.model.SalesOrderHeader;
import com.sap.espm.model.SalesOrderItem;
import com.sap.espm.model.util.Utility;

/**
 * 
 * Function Import processor class for Sales Orders
 * 
 */
public class SalesOrderProcessor {

	/**
	 * Function Import implementation for confirming a sales order
	 * 
	 * @param salesOrderId
	 *            sales order id of sales order to be confirmed
	 * @return SalesOrderHeader entity
	 * @throws ODataException
	 */
	@SuppressWarnings("unchecked")
	@EdmFunctionImport(name = "ConfirmSalesOrder", entitySet = "SalesOrderHeaders", returnType = @ReturnType(type = Type.ENTITY, isCollection = true))
	public List<SalesOrderHeader> confirmSalesOrder(
			@EdmFunctionImportParameter(name = "SalesOrderId") String salesOrderId)
			throws ODataException {
		EntityManagerFactory emf = Utility.getEntityManagerFactory();
		EntityManager em = emf.createEntityManager();
		try {

			Query query = em
					.createQuery("SELECT s FROM SalesOrderHeader s WHERE s.salesOrderId ="
							+ salesOrderId);
			try {
				SalesOrderHeader so = (SalesOrderHeader) query
						.getSingleResult();
				em.getTransaction().begin();
				so.setLifeCycleStatus("P");
				so.setLifeCycleStatusName("In Process");
				em.persist(so);
				em.getTransaction().commit();
				List<SalesOrderHeader> salesorderlist = null;

				query = em
						.createQuery("SELECT s FROM SalesOrderHeader s WHERE s.salesOrderId ='"
								+ salesOrderId + "'");
				salesorderlist = query.getResultList();
				return salesorderlist;

			} catch (NoResultException e) {
				throw new ODataApplicationException(
						"No Sales Order with Sales Order Id:" + salesOrderId,
						Locale.ENGLISH, HttpStatusCodes.BAD_REQUEST);
			}
		} finally {
			em.close();
		}
	}

	/**
	 * Function Import implementation for cancelling a sales order
	 * 
	 * @param salesOrderId
	 *            sales order id of sales order to be cancelled
	 * @return SalesOrderHeader entity
	 * @throws ODataException
	 */
	@EdmFunctionImport(name = "CancelSalesOrder", entitySet = "SalesOrderHeaders", returnType = @ReturnType(type = Type.ENTITY, isCollection = true))
	public List<SalesOrderHeader> cancelSalesOrder(
			@EdmFunctionImportParameter(name = "SalesOrderId") String salesOrderId)
			throws ODataException {
		EntityManagerFactory emf = Utility.getEntityManagerFactory();
		EntityManager em = emf.createEntityManager();
		try {

			Query query = em
					.createQuery("SELECT s FROM SalesOrderHeader s WHERE s.salesOrderId ="
							+ salesOrderId);
			try {
				SalesOrderHeader so = (SalesOrderHeader) query
						.getSingleResult();
				em.getTransaction().begin();
				so.setLifeCycleStatus("X");
				so.setLifeCycleStatusName("Cancelled");
				em.persist(so);
				em.getTransaction().commit();
				List<SalesOrderHeader> salesOrderList = null;
				query = em
						.createQuery("SELECT s FROM SalesOrderHeader s WHERE s.salesOrderId ='"
								+ salesOrderId + "'");
				salesOrderList = query.getResultList();
				return salesOrderList;
			} catch (NoResultException e) {
				throw new ODataApplicationException(
						"No Sales Order with Sales Order Id:" + salesOrderId,
						Locale.ENGLISH, HttpStatusCodes.BAD_REQUEST);
			}
		} finally {
			em.close();
		}
	}

	/**
	 * Function Import implementation for getting all the Sales Order Items
	 * under a Sales Order Header
	 * 
	 * @param SalesOrderId
	 *            Sales Order Id of a Sales Order
	 * @return SalesOrderItem entity.
	 * @throws ODataException
	 */
	@SuppressWarnings("unchecked")
	@EdmFunctionImport(name = "GetSalesOrderItemsById", entitySet = "SalesOrderItems", returnType = @ReturnType(type = Type.ENTITY, isCollection = true))
	public List<SalesOrderItem> getSalesOrderById(
			@EdmFunctionImportParameter(name = "SalesOrderId") String salesOrderId)
			throws ODataException {
		EntityManagerFactory emf = Utility.getEntityManagerFactory();
		EntityManager em = emf.createEntityManager();
		List<SalesOrderItem> soiList = null;
		try {

			Query query = em
					.createQuery("SELECT soi FROM SalesOrderItem soi WHERE soi.id.salesOrderId ='"
							+ salesOrderId + "'");

			try {

				soiList = query.getResultList();
				return soiList;

			} catch (NoResultException e) {
				throw new ODataApplicationException(
						"No matching Sales Order with Sales Order Id:"
								+ salesOrderId, Locale.ENGLISH,
						HttpStatusCodes.BAD_REQUEST);
			}
		} finally {
			em.close();
		}
	}

}
