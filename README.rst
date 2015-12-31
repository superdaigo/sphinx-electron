=================
 sphinx-electron
=================

``sphinx-electron`` is a package to build electron application which includes sphinx html outputs.
Sphinx projects should have separate directories for source(``source``) and build(``build``).


Requirements
============

- `Sphinx <http://sphinx-doc.org>`_
- `Node <http://nodejs.org/>`_
- `electron-builder <http://github.com/maxogden/electron-packager>`_


Install
=======

Move to sphinx project directory and clone source code::

  $ cd [Sphinx Project Directory]
  $ git clone sphinx-electron


Install requirements::

  $ cd electron-packager
  $ nmp install electron-packager


Sphinx project structure should be like below::

    [Sphinx Project Directory]
       ├── Makefile
       ├── make.bat
       ├── build               # Sphinx build directory
       ├── source              # Sphinx source directory
       └── sphinx-electron     # this package


Setup
=====

Add below secdtion into sphinx Makefile::

  app:
  	$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html
  	rm -rf sphinx-electron/html;cp -r $(BUILDDIR)/html sphinx-electron/html
  	cd sphinx-electron; npm run release
  	@echo
  	@echo "Build finished. The apps are in $(BUILDDIR)/app."



Modify electron application settings in package.json file.

--------------------  -------------------------------------------
Key                   Description 
====================  ===========================================
``name``              Application name
``version``           Application version
``company``           Company name
``app_bundle_id``     Bundle ID for OSX application
``helper_bundle_id``  Bundle ID for OSX helper application
``arch``              Available values: ia32, x64, all
``platform``          Available values: linux, win32, darwin, all
--------------------  -------------------------------------------


Build Electron Application
==========================

Move to sphinx project directory, then execute below::

  $ make app

