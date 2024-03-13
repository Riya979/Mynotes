class P1:
    def m1(self):
        print('hello')
class P2:
    def m2(self):
        print('hii')
class child(P1,P2):
    def m3(self):
        print('hiee')

p=child()
p.m1()
p.m2()
p.m3()