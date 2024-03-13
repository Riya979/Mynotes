
class A:
    def m1(self):
        print('Im a')
class B(A):
    def m2(self):
        print('Im b')
class C(A):
    def m3(self):
        print('Im c')
class D(B,C):
    def m4(self):
        print('Im d')
App=D()
App.m1()
App.m2()
App.m3()
App.m4()