# try:
#     x = 10 / 0  
# except ZeroDivisionError:
#     print("Cannot divide by zero!")
# else:
#     print("Division successful.")
# finally:
#     print("This will always execute.")
# print('start of pgm')
# try:
#     x=int(input('enter number='))
#     y=int(input('enter number='))
#     z=x/y
#     print(z)
    
# except(ZeroDivisionError):
#     print('cannot divide by zero')
# except(ValueError):
#     print('cannot input strings')
# print('end of pgm')
try:
    x=int(input('enter number='))
    y=int(input('enter number='))
    z=x/y
    print(z)
except(ZeroDivisionError):
    pass
print('end of program')
    