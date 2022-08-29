#!/usr/bin/env sh

ICON=""
TRACKINFO="$(spotify status artist) - $(spotify status track)"

sketchybar --set $NAME icon="$ICON" label="${TRACKINFO}"
