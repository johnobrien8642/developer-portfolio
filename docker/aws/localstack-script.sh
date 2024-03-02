#!/bin/bash
awslocal s3api \
create-bucket --bucket developer-portfolio \
--create-bucket-configuration LocationConstraint=eu-central-1 \
--region eu-central-1
awslocal s3api put-bucket-acl --bucket developer-portfolio --acl public-read
awslocal s3api put-bucket-cors --bucket developer-portfolio  --cors-configuration file://cors-config.json