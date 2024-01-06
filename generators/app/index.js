import Generagor from 'yeoman-generator'
import { glob } from 'glob'
export default class extends Generagor {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }

    async writing() {
        let res = await glob(`${this.templatePath()}/**/*`, { dot: true })
        res = res.map(item => {
            return item.split('templates\\')[1].replace(/\\/g, "/")
        })
        res.forEach(item => {

            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
             )

        })

    }
}