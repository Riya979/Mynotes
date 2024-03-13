# class Employee:
#     def __init__(self,name="p1",name2="p2"):
#         self.name=name
#         self.name2=name2
#     def display(self):
#         print(self.name)
#         print(self.name2)
# e1=Employee()
# e1_c=Employee('priyanka','riya')
# e1.display()
# e1_c.display()
class Employee:
    def display(self,name,age):
          self.name=name
          self.age=age
          print(self.name)
          print(self.age)
e1=Employee()
e1.display('priya',21)


        