class Employee:
    company='tech'
    @classmethod
    def display(cls):
        print(cls.company)
Employee.display()
e1=Employee
e1.display()