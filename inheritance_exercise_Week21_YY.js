class Employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }
    getName() {
        return this.name;
      }
    
    getDepartment() {
        return this.department;
      }
    sayPhrase = () => console.log(`I'm ${this.name} from ${this.department} department.`);
}

class Manager extends Employee {
    constructor (name, department, level) {
        super (name, department);
        this.level = level;
    }
   
    getLevel(){
        return this.level;
    }

    sayPhrase = () => console.log (`My name is ${this.name} and ${this.level} level Manager from ${this.department} Department.`);
}

class Salesman extends Employee {
    constructor (name, department, quota) {
        super(name, department);
        this.quota = quota;
    }
    
    getQuota(){
        return this.quota;
    }

    sayPhrase = () => console.log(`Hi, it's ${this.name} and I'm from ${this.department}. This month quota will be ${this.quota} for me.`);
}

const employee = new Employee ("John","IT");
employee.sayPhrase();
console.log(`Employee Name: ${employee.getName()}`);
console.log(`Department: ${employee.getDepartment()}`);

console.log("----------------------------");

const employee1 = new Employee ("Smith","HR");
employee1.sayPhrase();
console.log(`Employee Name: ${employee1.getName()}`);
console.log(`Department: ${employee1.getDepartment()}`);

console.log("----------------------------");

const manager = new Manager ("Peter", "Engineering", "Senior");
manager.sayPhrase();
console.log(`Name: ${manager.getName()}`);
console.log(`Department: ${manager.getDepartment()}`);
console.log(`Level: ${manager.getLevel()}`);

console.log("----------------------------");

const salesman = new Salesman ("Danny", "Sales", "5%" );
salesman.sayPhrase();
console.log(`Name: ${salesman.getName()}`);
console.log(`Department: ${salesman.getDepartment()}`);
console.log(`Quota: ${salesman.getQuota()}`);
