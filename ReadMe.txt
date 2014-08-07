Table of Contents
=================
1.  Prerequisites
2.  Define destinations in your cloud account.
3.  Define HTML5 application on cloud
3.1  Create a new HTML5 application
3.2  Clone git repository in Eclipse
3.3  Copy and upload code to repository
3.4  Version your code and Activate application url for public access
     
1. Prerequisites
   a. Install latest version for Eclipse Kepler (SR2 used for this scenario)
      You can find the latest release here 
      http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2
   b. Create a trial account on SAP HANA Cloud Platform
      If you don't have it already, you can register for free here
      https://help.hana.ondemand.com/help/frameset.htm?65d74d39cb3a4bf8910cd36ec54d2b99.html
      
2.  Define destinations in your cloud account.
	a. Navigate to the cockpit in your trial account.
	   Or goto this url https://account.hanatrial.ondemand.com/cockpit
	b. Click on Destinations tab
	c. Click on New Destination
	d. Click on Import from File and select the cloudbackend file 
	   in the destinations folder from this branch
	e. Save the destination once it is uploaded.
	f. Repeat step c to step e for cloudbackendimages file

3.  Define HTML5 application on cloud
	Now we are going to create the repository and upload our code for the UI

3.1 Create a new HTML5 application
	a. Navigate to the cockpit in your trial account.
	   Or goto this url https://account.hanatrial.ondemand.com/cockpit
	b. Click on HTML5 Applications
	c. Click on New Application
	d. Provide "espmwebshop" as the Application name. (You can provide any other name also)
	e. Click Create.
	f. Click on "espmwebshop"
	g. Your application is created and ready for use.

3.2 Clone git repository in Eclipse
	a. Once you have completed step 3.1 click on Development tab in the left pane
	b. Under "Source Location" copy the Git Repository Link
	c. It should be something like https://git.hanatrial.ondemand.com/<pNumber>trial/espmwebshop
	d. Start Eclipse and switch to the Git perspective
	e. Under Git Repositories, click on "Clone a Git Repository"
	f. Paste the Git-URL you've copied in step b above into the URI field 
	   of the popped-up window, provide your user name and password 
	   of your SAP HANA Cloud Platform trial account into the fields 
	   User and Password, click on Next, click on Next again and click on Finish.
	g. Check your connection settings, (proxy in Eclipse) if any of the above steps fail
	h. You should now have an empty repository configured in your Eclipse.

3.3  Copy and upload code to repository
 	a. Once you have completed step 3.2 right click on the Git repository and 
 	   select the command Import Projects
 	b. Select Import as general project, click on Next (note the name of the project) and 
 	   after that on Finish.
	c. Switch to the Web perspective in Eclipse
	d. Copy all the files and folders inside webshop-ui folder from this branch.
	e. Right-click the project you just created and select Paste
	f. Now you have copied all the UI code into your project
	g. To upload the code to the git repository right-click your project
	h. Select Team -> Commit
	i. Write a short Commit message 
	j. Select all files (Select-all button is on the right hand side of the "Files" panel)
	k. Click "Commit and Push"
	l. Provide your credentials if prompted
	m. You should get a success message with the git repository link.

3.4 Version your code and Activate application url for public access
	a. Navigate to the cockpit in your trial account.
	   Or goto this url https://account.hanatrial.ondemand.com/cockpit
	b. Click on HTML5 Applications.
	c. Click on "espmwebshop" and select Development.
	d. You should be able to see the commit message you gave above in step 3.3 (i)
	e. You should also be able to see your destinations under "Required Destinations"
	f. The status for the destinations should be green, indicating they are
	   present in the account.
	g. Click on the commit message and the Webshop application should open up in a new tab.
	h.  In the list of available commits select the commit message 
		and click on the "Create Version" icon at the right end of the line
	i. Provide a version name 1.0 and click on Add
	j. Now switch to the Version Management tab
	k. You should see the version you've just created before
	l. Now click on the icon at the right end of the line to Activate this application version
	m. You will get a message telling you that the version has been activated and 
	   that the Changes will be effective after (re)-start of the application. 
	n. Confirm the question if you really want to do this with by clicking on Yes.
	o. Switch to the HTML5 Application Dashboard tab and click on the Application Url
	p. This is the URL using which others can now access your app