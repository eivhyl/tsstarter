import * as readline from "readline"
import { ask } from "./utils"

export default async function main (args: string[]) {
	const answer = await ask('What is name pls?\n', { 1: () => console.log('hello')}, true)
	console.log('Hello,', answer);
}