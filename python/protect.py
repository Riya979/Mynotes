class Car:
    _milege=0
    def _drive(self):
        self._milege+=10
class BMW(Car):
    pass
b=BMW()
print(b._milege)
b._drive()
    