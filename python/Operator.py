class Book1:
    pages=200
    def __add__(self,other):
        total=Book1.pages+other.pages
        return total
class Book2:
    pages=100
    
classmate=Book1()
store=Book2()
print(classmate+store)
        