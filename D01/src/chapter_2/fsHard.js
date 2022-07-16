import fs from 'fs'
import { stdout } from 'node:process';

export const progressbar = async () => {
	const allFiles = await fs.promises.readdir('./files/fsHard')
	const allFilesBytes = {}
	let allBytes = 0
	await Promise.all(
		allFiles.map((el) => fs.promises.stat(`./files/fsHard/${el}`)))
		.then((res) => res.forEach((ele, idx) => {
			allFilesBytes[`${allFiles[idx]}`] = ele.size
			allBytes += ele.size
		}))
		let persent = 0
	allFiles.forEach(async (el) => {
		await fs.promises.readFile(`./files/fsHard/${el}`, 'utf-8')
		persent += (100 * (allFilesBytes[`${el}`] / allBytes))
		stdout.write('....' + ~~persent)
	})
}

progressbar()