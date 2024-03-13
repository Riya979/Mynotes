from abc import ABC,abstractmethod
class Remote(ABC):
    @abstractmethod
    def on(self):
        pass
    @abstractmethod
    def off(self):
        pass
    @abstractmethod
    def Zoom(self):
        pass
class Epson(Remote):
    def on(self):
        print('hii')
    def off(self):
        print('hello')
class samsung(Epson):
    def Zoom(self):
        print('bye')
s=samsung()
s.on()
s.off()
s.Zoom()