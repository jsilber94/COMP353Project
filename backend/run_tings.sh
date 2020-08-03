#!/bin/bash

ssh -L 9890:dyc353.encs.concordia.ca:3306 a_corico@login.encs.concordia.ca

node app.js