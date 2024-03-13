class A:
    def f1(self):
        print('Im single')
e=A()
e.f1()
print(A.__bases__)
print(A.__str__)
print(e.__hash__())