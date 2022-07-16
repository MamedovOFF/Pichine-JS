

/* В продолжение прошлого задания вам нужно нужно создать 4 новых класса:

- Company - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании. Это объект, у которого есть поля Developers, Managers. В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:

- addNewCompanyMember() - позволяет нанять нового сотрудника. В результате метода у выбранного сотрудника

должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной комании

- Project - класс описывающий проект компании. На проекте может быть только 1 менеджер! Каждый сотрудник может работать только над одним проектом! Состоит из:
- Project Name
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- Team - команда проекта. Объект, типа {Managers: [], Developers: {Frontend : [], Backend: []}}. В св-ва этого объекта указан массив аналогичных классов.

Метод:
- completeProject() - позволяет закончить проект. В результате выполнения функции проект из currentProjects перемещается в finishedProjects. У команды данного проекта должно увеличиться кол-во завершенных проектов.
- addNewProjectMember() - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.


- BackendDeveloper - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

- Frontend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'frontend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

-Manager - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.

- checkMember(minQuantity) - менеджер проверяет, удовлетворяет ли сотрудник условиям проекта. Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

*/

import { Empleyee } from "./classes.js";

/* Св-ва и методы класса
companyName - string
currentProjects - Массив экземпляров класса Project
completedProjects -  Массив экземпляров класса Project
staff - {
    developers :  {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    },
    managers: массив содержащий экземпляры класса Manager
}

addNewCompanyMember(Developer/Manager) - в кач-ве аргумента принимает экземляр класса FrontendDeveloper, BackendDeveloper или Manager
addProject(Project) - в кач-ве аргумента принимает экземляр класса Project
getMembersQuantity()
*/
export class Company {
    constructor(companyName, currentProjects, completedProjects, staff) {
        this.companyName = companyName
        this.currentProjects = currentProjects
        this.completedProjects = completedProjects
        this.staff = staff
    }
    addNewCompanyMember(Member) {
        if (Member instanceof Manager)
            this.staff.managers.push(Member)
        if (Member instanceof FrontendDeveloper)
            this.staff.developers.frontend.push(Member)
        if (Member instanceof BackendDeveloper)
            this.staff.developers.backend.push(Member)
    }
    addProject (Projects) {
        if (Projects instanceof Project)
            this.currentProjects.push(Projects)
    }
    getMembersQuantity () {
        return (this.staff?.managers?.length ?? 0) +  (this.staff?.developers?.frontend?.length ?? 0) + (this.staff?.developers?.backend?.length ?? 0)
    }
}


 /*
- projectName - string
- minQualification -number
- Team -  {
    manager : экземпляр класса Manager
    developers: {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    }
}


completeProject()
addNewProjectMember(Developer/Manager) - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/

export class Project {
    constructor(projectName, minQualification, Team) {
        this.projectName = projectName
        this.minQualification = minQualification
        this.Team = Team
    }
    completeProject () {
        const project = arguments[0]
        const idx = this.currentProjects.indexOf(project)
        this.currentProjects.splice( idx, idx > 0 ? idx : 0)
        project.Team.developers.frontend.forEach(el => el.projectQuantity++)
        project.Team.developers.backend.forEach(el => el.projectQuantity++)
        this.completedProjects.push(project)
    }
    addNewProjectMember (Member) {
        if (Member instanceof Manager) {
            if (this.Team.manager.checkMember(Member)) {
                this.Team.manager = Member
            }
        }
        if (Member instanceof FrontendDeveloper) {
            if (this.Team.manager.checkMember(Member)) {
                this.staff.developers.frontend.push(Member)
            }
        }
        if (Member instanceof BackendDeveloper) {
            if (this.Team.manager.checkMember(Member)) {
                this.staff.developers.frontend.push(Member)
            }
        }
    }
}
/*
projectQuantity - number
checkMember(minQuantity) - в качестве аргумента принимается строка ('L1'/'L2'/'L3'/'L4')
*/
export class Manager extends Empleyee {
    constructor (name, grade, hardskill, company, projectQuantity) {
        super(name, grade, hardskill, company)
        this.projectQuantity = projectQuantity
    }
    checkMember(minQuantity, member) {
        if (this.company != member.company)
            return false
       return minQuantity <= member.grade 
    }
}

/*
stack - массив строк
- developerSide - строка ('frontend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class FrontendDeveloper extends Empleyee {
    constructor(name, grade, hardskill, company,stack, projectQuantity) {
        super(name, grade, hardskill, company)
        this.stack = stack
        this.developerSide = 'frontend'
        this.projectQuantity = projectQuantity
    }
    expandStack (newTech) {
        this.stack.push(newTech)
    }
}

export class BackendDeveloper extends Empleyee {
    constructor(name, grade, hardskill, company,stack, projectQuantity) {
        super(name, grade, hardskill, company)
        this.stack = stack
        this.developerSide = 'backend'
        this.projectQuantity = projectQuantity
    }
    expandStack (newTech) {
        this.stack.push(newTech)
    }
}


// const front = new FrontendDeveloper('Laren', 'L3', 'VeryHard', 'SmartData',['Vue', 'React'], '12 ')
// const backend = new BackendDeveloper('Vadim', 'L3', 'VeryHard', 'SmartData',['Vue', 'React'], '12 ')
// const project1 = new Project('zopa', 'L2', {developers: {
//     frontend: [front],
//     backend: [backend]
// }})
// const project2 = new Project('zopa1', 'L2', [])
// const project3 = new Project('zop2', 'L2', [])
// const company = new Company('Test', [project2,project1, project3], [], {developers: {
//     frontend: [front],
//     backend: [backend]
// }, managers: null})
// // console.log(company)
// // project1.completeProject.bind(company, project1)()
// // console.log(front)
// console.log(company.staff)
// console.log(company.getMembersQuantity())