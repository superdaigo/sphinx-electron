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


Install and Setup
=================

Move to sphinx project directory and clone source code::

  $ cd [Sphinx Project Directory]
  $ git clone sphinx-electron


Install requirements::

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

