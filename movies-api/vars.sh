#!/bin/sh

die() {
    echo "Exiting..."
    exit 1
}

usage() {
    echo "Env needs to be passed in as argument"
    echo "Usage:"
    echo "dev"
    echo "test"
    echo "prod"
}

set_vars() {
    export DB_USERNAME=$1
    export DB_PASSWORD=$2
    export DB_ADDRESS=$3
    export DB_PORT=$4
}

if [[ ! "$#" -eq 1 ]]; then 
    echo "Arguments expected: 1"
    echo "Arguments provided: $#."
    die
fi

ENV="$1"

if [[ -z "$ENV" ]]; then 
    usage
    die
fi

if [[ "$ENV" == "dev" ]]; then
    echo "Setting dev env variables"
    set_vars "" "" "localhost" "27017" 
elif [[ "$ENV" == "test" ]]; then
    echo "Setting test env variables"
    set_vars "foo" "bar" "localhost" "27017"
elif [[ "$ENV" == "prod" ]]; then
    echo "Setting prod env variables"
    set_vars "to_be_set" "to_be_set" "to_be_set" "to_be_set"
else
    echo "Invalid argument provided: $ENV"
    usage
    die
fi