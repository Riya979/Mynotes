class A:
    def m1(self):
        print('im A')
class B(A):
    def m2(self):
        print('im B')
class C(B):
    def m3(self):
        print('im C')
b=C()
b.m2()
b.m1()
b.m3()
