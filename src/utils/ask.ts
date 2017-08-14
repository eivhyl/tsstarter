import * as readline from "readline"

interface QuestionSwitch {
	[index: string]: (answer: string) => void
}

const ask = (question: string, answers?: QuestionSwitch, retry = false) => new Promise((resolve, reject) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})
	function asker () {
		rl.question(question, answer => {
			if (answers) {
				const callback = answers[answer]
				if (callback)
					callback(answer)
				else if (retry)
					asker()
			}
			resolve(answer)
			rl.close()
		})
	}
})

export default ask
