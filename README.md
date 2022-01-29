# Nivo Time Range Month Legend Behavior

This app demonstrates unexpected month legend behavior on the Nivo Time Range. 

## Findings

There seem to be two factors that affect wether the month legend renders:

- `from` prop value
- number of days in first column

One way I have found to ensure the month legend renders is by setting the `from` prop to a date delineated by /'s instead of -'s. 

![TimeRange with from="2018-04-01" and TimeRange with from="2018/04/01"](screenshot.png)

## Running Locally

- ensure you have Node.js installed
- run `npm i` and `npm run dev` at the root
- open http://localhost:3000/ in your browser
