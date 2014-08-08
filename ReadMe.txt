Table of Contents
=================
1.  Import and Build ESPM Mobile Projects
1.1   How to import 'espm-mobile' projects into Eclipse IDE
1.2   How to build 'espm-mobile' projects
2.  ESPM SAPUI5 mobile application
2.1   How to run 'espm-mobile-shopping-web' applications on local server

1. Import and Build ESPM Mobile Projects
========================================

1.1 How to import 'espm-mobile' projects into Eclipse IDE
---------------------------------------------------------

1.1.1 Prerequisite
    * Make sure that you have installed a Chrome Web Browser.
     Only this Browser will render the SAPUI5 mobile web application in a reasonable way
   * Make sure that you have installed a development environment as described in chapter 1. of
     "ESPM SAP HANA Cloud Installation Guide" available on
	  http://scn.sap.com/docs/DOC-46868
   * Clone https://github.com/SAP/cloud-espm-scenarios and check out scenario-mobileshop branch
     (in the  "ESPM Scenarios Installation Guide" this will be explained in detail in chapter 2)
  
1.1.2 Import as Maven project
   * Maven settings.xml:
     - Copy espm/cfg/settins.xml to <local-user-home-path>\.m2.
       If you have already a settings.xml then add <proxies> section and <profile> of esmp/cfg/settins.xml to your settings.xml
     - Configure settigns.xml as follows
   * Configure settings.xml
     - Network settings:
         > Case 1: You work in a network with a proxy (e.g. proxy host: 'proxy' and proxy port: '8080'):
           * replace the 6 'proxy' and '8080' values in the settings.xml with the host and port values you are working with.
         > Case 2: You work in a network without a proxy:
           * Remove <proxies> section of settings.xml
           * Remove properies <local.server.proxy.settings> and <browser.proxy.settings> of settings.xml
     - SDK settings:
         * Make sure that properties <sap.cloud.sdk.version> and(!) <sap.cloud.sdk.path> corresponds to the version and
           location of the sdk you downloaded before
     - Eclipse path:
         * Make sure that property <eclipse.path> corresponds to the location where installed your eclipse
     - UI5 version:
         * Make sure that property <sap.cloud.ui5.version> is set to the value of the SAPUI5 runtime you downloaded with
           the Hana Cloud Tools in the Prerequisites as follows
           Note: To find this value navigate to <eclipse.path>/plugins and find the SAPUI5 core plugin com.sap.ui5.core_<VERSION>.jar.
           The <VERSION> is the value you have to use
   * Import the espm-mobile/pom.xml root pom as "Existing Maven projects" into your Eclipse workspace. The imported 
     projects are:
     - espm-mobile
     - espm-mobile-shopping-web.

1.2 How to build 'espm-mobile' projects
---------------------------------------
1. Select espm-mobile/pom.xml and choose "Run as..." > Maven build...
2. In the opened 'Edit Configuration' dialog enter 'clean install' in the Goals field.
3. Choose run to start the Maven build
  
2. ESPM SAPUI5 mobile application
=================================

2.1 How to run 'espm-mobile-shopping-web' applications on local server
----------------------------------------------------------------------

2.1.1. Create and Configure new SAP HANA Cloud local runtime
   * On Servers view: New > Server; select SAP > SAP HANA Cloud local runtime; choose Finish
   * Double-click on newly created server node to open server editor; click 'Open launch configuration'
   * If you are working behind a company firewall you might need to set a network proxy to access the internet.
     If you don't have a network proxy skip the 'Set Network Proxy' steps.
     Set Network Proxy steps:
     - Add the following string as vm Arguments on Arguments tab
       -Dhttp.proxyHost=proxy -Dhttp.proxyPort=8080 -Dhttps.proxyHost=proxy -Dhttps.proxyPort=8080 -Dhttp.nonProxyHosts=*.sap.corp  
     - Confirm configuration dialog with OK
   * (Back) in the server editor: Switch to 'Connectivity' tab
   * Import existing destinations:
     (after each destination import save it and confirm opened dialog to deploy the imported destination to the server)
     i)   espm-mobile/destinations/abapmobilebackend
     ii)  espm-mobile/destinations/cloudmobilebackend

2.1.2 Run web application on SAP HANA Cloud local runtime
   * Select 'espm-mobile-shopping-web' project node
   * From context menu choose Run As > Run on Server.
   * Choose 'Choose existing server option' and select the before created local server
   * Choose Finish to start up the local server.
   * Browser (use only Chrome Web Browser as mentioned in the above Prerequisite) opens and displays the initial page
     of espm mobile application
   * Add ?sap-ui-xx-fakeOS=ios (or =android or =blackberry) to simulate the corresponding device appearance
     Example Url: http://localhost:8080/espm-mobile-shopping-web/?sap-ui-xx-fakeOS=ios