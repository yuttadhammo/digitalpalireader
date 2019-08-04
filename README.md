## New Version

This is a rewrite of the DPR to be compatible with Web Extensions.

To test the extension, type about:debugging into the firefox address bar and choose "Load Temporary Add On". Load the manifest.json file from this repository.

My additions so far:

manifest.json - The metadata and entry points for the extension
icons/* - A bunch of icons
scripts/background.js - Executed in the background when the extension first loads. Not implemented.
scripts/protocolhandler.js - Executed in response to a ext+dpr: protocol request. Not implemented.
pages/options.html - The preferences for the extension
pages/popup.html - The popup when the extension icon is clicked on the toolbar. Not yet implemented.
pages/sidebar.html - The sidebar for the extension. A blank page for now.

## Old Version

This is the git source archive for the DPR.

Each set is in its own subfolder, and each set has a build.sh script that will create the xpi for use with Firefox.  Better than this, though, is to simply create a link to the set directory in your Firefox profile's "extensions" directory.  To do this, create a file for the set, named:

<directory>@noah.yuttadhammo

with the location of the directory as the first and only line of the file, i.e.:

/path/to/directory

For example, create a file in your profile's "extensions" directory called:

digitalpalireader@noah.yuttadhammo

and put the following in it:

/path/to/digitalpalireader

(replacing "/path/to" with the actual path of the digitalpalireader directory on your machine).

Do this for each extension and then start Firefox.
