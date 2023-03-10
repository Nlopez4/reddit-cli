#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'

const { argv } = yargs(process.argv)

const res = await fetch('https://reddit.com/.json')
const data = await res.json()
const children = data.data.children
const randomPost = Math.floor(Math.random() * data.data.children.length)
const post = data.data.children[randomPost]

if (argv.print) {
    console.log(`
    Title: ${post.data.title}\n
    Link: ${post.data.permalink}\n
    `)
} else {
    // open in browser
    open(`https://reddit.com${post.data.permalink}`)
}

