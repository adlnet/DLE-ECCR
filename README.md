# DLE-ECCR
The Enterprise Course Catalogue is a set of microservices designed to define and crosswalk competency frameworks for the DLE

## ECC Base Image warning
A lot of these images rely on ecc-base-python image (registry.il2.dso.mil/adl-ousd/ecc/ecc-base-python-image).  This is a custom image based on IronBank's pythonv3 base image(registry1.dso.mil/ironbank/opensource/python:v3.13), that installs xmlsec1, libxml2, pango (for Python), and the psql client v14 on top of it.

For security purposes, this image can not be shared with the broader community, but government organizations may be able to request access to this image from Platform One.

## Email Services
Additionally, these services are designed to use Platform One's [P1PS server](https://p1ps-docs.dso.mil/documents/what-is-p1ps) instead of a standard SMTP server.  A good starting point if moving away from P1 P1 may be [SMTP2Go](https://developers.smtp2go.com/docs/getting-started-with-templates).# Markdown syntax guide

## CIS
The competency Indexing Service (CIS) acts as a database that stores competency framework data in a Neo4J graph database.  It currently does not have a dockerfuile and relies on a docker-compose file that pulls data from dockerhub instead of IronBank.

## CDS and CMS
The CDS and CMS systems are currently [rimarily forks of the XDS and XMS of the ECC and will require additional work to fully integrate with the rest of the ECCR

## Installing Python-Packages
Because this was built for a PartyBus deployment, the following code must be run in the root directory before you can build some systems:
```
python3 -m venv .cache/python-packages
.cache/python-packages/bin/pip install -r requirements.txt --target ".cache/python-packages"
```

## Installing node packages
Because this was built for a PartyBus deployment, the following code must be run in the root directory before you can build some systems:
```
npm install
```

*Note*: This project was designed to run in a specific DevSecOps environment, and may require additional changes before being viable in a new one.  It is also currently tied to CaSS for competency information. Development of this project was also not completed before this project was shut down.
