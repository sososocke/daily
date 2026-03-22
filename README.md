# DAILY

- to start project: `ionic serve`

- collct artifacts on raspi
  execute `/srv/daily/deploy.sh`

- restart docker container in `/srv/daily/deploy.sh`

## Artifacts

- `.github/workflows/build.yaml` describes pipeline to publish build artifacts
- artifacts can be found at GitHub -> projects -> daily -> actions

- deploy.sh:

  ```yaml
  #!/bin/bash
  OWNER="sososocke"
  REPO="daily"
  TOKEN="$GITHUB_TOKEN"

  # Get latest success run ID
  RUN_ID=$(curl -s -H "Authorization: token $TOKEN" "https://api.github.com/repos/$OWNER/$REPO/actions/runs?per_page=1&status=success" | jq -r '.workflow_runs[0].id')
  echo $RUN_ID

  # Get artifact URL
  ARTIFACT_URL=$(curl -s -H "Authorization: token $TOKEN" "https://api.github.com/repos/$OWNER/$REPO/actions/runs/$RUN_ID/artifacts" | jq -r '.artifacts[] | select(.name == "daily-www") | .archive_download_url')
  echo $ARTIFACT_URL

  # Download and extract
  curl -L -H "Authorization: token $TOKEN" "$ARTIFACT_URL" -o ~/tmp/daily-www.zip
  unzip -o ~/tmp/daily-www.zip -d ~/tmp/daily-deploy
  cp -r ~/tmp/daily-deploy/* /srv/daily/
  # Restart nginx or container here
  docker compose up -d
  ```
