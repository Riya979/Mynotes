class Employee:
    rate_of_interest=0.1
    @staticmethod
    def cal(p,n):
        si=(p*n*Employee.rate_of_interest/100)
        print(si)
Employee.cal(3000,3)