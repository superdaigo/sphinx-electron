=================
 sphinx-electron
=================

This package is for building electron application which includs sphinx html outpts.
Sphinx projects should have separate source and build directories.


Requirements
============

- Sphinx
- Node
- electron-builder


Install and Setup
=================

Get source code::

  $ git clone sphinx-electron


Install required packages::

  $ cd electron-packager
  $ nmp install electron-packager


Add below secdtion into sphinx Makefile::

  app:
  	$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html
  	rm -rf sphinx-electron/html;cp -r $(BUILDDIR)/html sphinx-electron/html
  	cd sphinx-electron; npm run release
  	@echo
  	@echo "Build finished. The apps are in $(BUILDDIR)/app."



Sphinx project structure should be like below::

    [Sphinx Project Directory]
       ├── Makefile
       ├── make.bat
       ├── build               # Sphinx build directory
       ├── source              # Sphinx source directory
       └── sphinx-electron     # this package


Build Electron Application
==========================

Move to sphinx project directory, then execute below::

  $ make app

