#!/bin/bash

await_status() {
    local url=$1
    local substring=$2
    local timeout=$3
    local count=0
    local start_time="$(date -u +%s)"

    echo "waiting for $url to be $substring"
    while [[ $(curl -m 1 -s $url) != *"$substring"* ]]; do
        cur_time="$(date -u +%s)"
        elapsed="$(($cur_time-$start_time))"

        if [ $elapsed -gt $timeout ]; then
            echo "Gave up waiting for $url after $elapsed seconds"
            exit 1
        fi
        sleep 1
        if [ $(($count % 10)) -eq 0 ]; then
            echo "Still waiting ($elapsed seconds), it could take up to $timeout seconds"
        fi
        count=$(( $count + 1 ))
    done
    cur_time="$(date -u +%s)"
    elapsed="$(($cur_time-$start_time))"
    echo "$url started in $elapsed seconds!"
}

# prepare to kill the react app that will run in the background
trap "exit" INT TERM
trap "kill 0" EXIT

# start the react app
BROWSER=none yarn start &
pid=$!
echo "running in pid $pid"

# wait until port 3000 is working
await_status http://localhost:3000/ html 30

# run e2e tests
yarn e2e
exitcode=$?

echo "Exiting with status $exitcode"
exit $exitcode
