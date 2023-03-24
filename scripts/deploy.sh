#!/usr/bin/env bash
set -e
ssh github@bird "
cd ~/apps/mcxue-ui
git checkout master
if output=\$(git pull); then
  if [[ \"\$output\" == *\"Already up-to-date.\"* ]]; then
    echo \"仓库代码已是最新的，无需更新\"
  else
    echo \"拉取最新代码并部署：\$(git log -1 --oneline)\"
    docker compose up --build -d
  fi
else
  echo \"git pull 命令执行失败，退出状态码为 \$?\"
fi
"
echo "结束"
