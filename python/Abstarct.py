from abc import ABC,abstractmethod
class vehicle(ABC):
    @abstractmethod
    def speed(self):
        pass
class BMW(vehicle):
    def speed(self):
        print('speed 160km')
class Deepu(vehicle):
    def speed(self):
        print('speed 120km')
b=BMW()
b.speed()
d=Deepu()
d.speed()