# class Car:
#     def eat(self):
#         print('Ice cream')
    
# class BMW(Car):
#     def eat(self):
#         print('Eat jammon{}'.format(60))
# priya=BMW()
# priya.eat()


class BMW:
    def B1(self):
        print('petrol')
class Benz():
    def B1(self):
        print('diesel')
        
car1=BMW()
car2=Benz()
def display(obj):
    obj.B1()
display(car1)
display(car2)