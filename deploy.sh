npm run export
gsutil -m rsync -d -r out/ gs://www.akshat.info
